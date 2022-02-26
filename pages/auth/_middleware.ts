import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  if (url.pathname !== "/auth") return;
  url.pathname = "/auth/login";
  return NextResponse.redirect(url);
}
