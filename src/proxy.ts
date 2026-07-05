import { NextRequest, NextResponse } from "next/server";
import {
  checkPassword,
  createAccessToken,
  SITE_ACCESS_COOKIE,
  verifyAccessToken,
} from "@/lib/site-access";
import { renderLoginHtml } from "@/lib/login-html";

// Only the homepage checks the password. Once past it, every other page
// (including direct links) is open — the gate is a first-visit speed bump,
// not full-site protection. The password screen and its submission are both
// handled right here, so no separate /login page or API route is needed.
export default async function proxy(request: NextRequest) {
  const token = request.cookies.get(SITE_ACCESS_COOKIE)?.value;
  if (verifyAccessToken(token)) {
    return NextResponse.next();
  }

  if (request.method === "POST") {
    const formData = await request.formData();
    const password = String(formData.get("password") || "");

    let isValid = false;
    try {
      isValid = checkPassword(password);
    } catch (error) {
      console.error("Site password check failed:", error);
      return new NextResponse(renderLoginHtml({ error: "config" }), {
        status: 500,
        headers: { "Content-Type": "text/html" },
      });
    }

    if (!isValid) {
      return new NextResponse(renderLoginHtml({ error: "wrong" }), {
        status: 401,
        headers: { "Content-Type": "text/html" },
      });
    }

    const response = NextResponse.redirect(request.nextUrl.origin);
    response.cookies.set(SITE_ACCESS_COOKIE, createAccessToken(), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    return response;
  }

  return new NextResponse(renderLoginHtml({}), {
    status: 401,
    headers: { "Content-Type": "text/html" },
  });
}

export const config = {
  matcher: ["/"],
};
