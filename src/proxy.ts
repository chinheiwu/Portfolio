import { NextRequest, NextResponse } from "next/server";
import { SITE_ACCESS_COOKIE, verifyAccessToken } from "@/lib/site-access";

// Only the homepage checks the password. Once past it, every other page
// (including direct links) is open — the gate is a first-visit speed bump,
// not full-site protection.
export default function proxy(request: NextRequest) {
  const token = request.cookies.get(SITE_ACCESS_COOKIE)?.value;
  if (!verifyAccessToken(token)) {
    const loginUrl = new URL("/login", request.nextUrl.origin);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
