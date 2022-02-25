import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  if (url.pathname !== "/dashboard") return;
  url.pathname = "/dashboard/home";
  return NextResponse.redirect(url);
}
