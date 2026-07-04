import { NextRequest, NextResponse } from "next/server";
import { checkPassword, createAccessToken, SITE_ACCESS_COOKIE } from "@/lib/site-access";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const password = String(formData.get("password") || "");
  const next = String(formData.get("next") || "/");

  let isValid = false;
  try {
    isValid = checkPassword(password);
  } catch (error) {
    console.error("Site password check failed:", error);
    return NextResponse.redirect(new URL("/login?error=config", request.nextUrl.origin));
  }

  if (!isValid) {
    const loginUrl = new URL("/login", request.nextUrl.origin);
    loginUrl.searchParams.set("error", "wrong");
    loginUrl.searchParams.set("next", next);
    return NextResponse.redirect(loginUrl);
  }

  const response = NextResponse.redirect(new URL(next, request.nextUrl.origin));
  response.cookies.set(SITE_ACCESS_COOKIE, createAccessToken(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}
