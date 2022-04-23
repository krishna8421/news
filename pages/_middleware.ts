import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { nextUrl: url, geo } = req;
  const country = geo?.country || "IN";
  const state = geo?.region || "DL";
  const city = geo?.city || "New Delhi";

  url.searchParams.set("countryFromReq", country);
  url.searchParams.set("stateFromReq", state);
  url.searchParams.set("cityFromReq", city);

  return NextResponse.rewrite(url);
}
