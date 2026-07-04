import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { buildGoogleAuthUrl } from "@/lib/google-auth";

export async function GET(request: NextRequest) {
  const state = randomBytes(16).toString("hex");
  const next = request.nextUrl.searchParams.get("next") || "/";
  const redirectUri = new URL("/api/auth/callback", request.nextUrl.origin).toString();

  let authUrl: string;
  try {
    authUrl = buildGoogleAuthUrl(redirectUri, state);
  } catch (error) {
    console.error("Failed to build Google auth URL:", error);
    return NextResponse.redirect(new URL("/login?error=config", request.nextUrl.origin));
  }

  const response = NextResponse.redirect(authUrl);

  response.cookies.set("oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 10,
  });
  response.cookies.set("oauth_next", next, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 10,
  });

  return response;
}
