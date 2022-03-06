import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // console.log(req)
  console.log(req.cookies.token);
  const url = req.nextUrl.clone();

  /*
   *  TODO:
   *    - verify the token
   */
  if (!req.cookies.token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  if (url.pathname === "/dashboard") {
    url.pathname = "/dashboard/home";
    return NextResponse.redirect(url);
  }
  return;
}
