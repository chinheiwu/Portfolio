import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForProfile } from "@/lib/google-auth";
import { findAllowedViewer } from "@/lib/allowlist";
import { encryptSession, SESSION_COOKIE_NAME } from "@/lib/session";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const storedState = request.cookies.get("oauth_state")?.value;
  const next = request.cookies.get("oauth_next")?.value || "/";

  if (!code || !state || !storedState || state !== storedState) {
    return NextResponse.redirect(new URL("/login?error=state", origin));
  }

  try {
    const redirectUri = new URL("/api/auth/callback", origin).toString();
    const profile = await exchangeCodeForProfile(code, redirectUri);

    if (!profile.email_verified) {
      return NextResponse.redirect(new URL("/unauthorized", origin));
    }

    const viewer = await findAllowedViewer(profile.email);
    if (!viewer) {
      return NextResponse.redirect(new URL("/unauthorized", origin));
    }

    const session = await encryptSession({
      email: viewer.email,
      name: viewer.name,
    });

    const response = NextResponse.redirect(new URL(next, origin));
    response.cookies.set(SESSION_COOKIE_NAME, session, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    response.cookies.delete("oauth_state");
    response.cookies.delete("oauth_next");
    return response;
  } catch {
    return NextResponse.redirect(new URL("/login?error=auth", origin));
  }
}
