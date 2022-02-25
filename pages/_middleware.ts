/*
TODO
Check if user already logged in then redirect to home page
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // create an instance of the class to access the public methods. This uses `next()`,
  // you could use `redirect()` or `rewrite()` as well
  let response = NextResponse.next()
  // get the cookies from the request
  let cookieFromRequest = request.cookies['my-cookie']
  // set the `cookie`
  response.cookie('hello', 'world')
  // set the `cookie` with options
  const cookieWithOptions = response.cookie('hello', 'world', {
    path: '/',
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    sameSite: 'strict',
    domain: 'example.com',
  })
  // clear the `cookie`
  response.clearCookie('hello')

  return response
}
===============================================================
  if (req.geo.city === 'New York') {
    return NextResponse.redirect('/home')
    // if the request is coming from London, rewrite to a special page
  } else if (req.geo.city === 'London') {
    return NextResponse.rewrite('/not-home')
  }

  return NextResponse.json({ message: 'Hello World!' })
  ===============================================================
In order to set the cookie before a redirect, you can create an instance of NextResponse,
then access the cookie method on the instance, before returning the response.
  const res = NextResponse.redirect('/') // creates an actual instance
  res.cookie('hello', 'world') // can be called on an instance
  return res


// the url will be shown  / but the  uses as /news/1
  if (req.nextUrl.pathname === "/") {
    return Response.rewrite("/news/1");
  }


      // the url will be shown  / but the  uses as /beta or /not-beta
    const isInBeta = JSON.parse(req.cookies['beta'] || 'false')
    return NextResponse.rewrite(`/${isInBeta ? 'beta' : 'non-beta'}`)
 */



  // return new Response('Hello, world!')
  // const url = req.nextUrl.clone()
  // url.pathname = '/login'
  // return NextResponse.redirect(url)

  // import { NextResponse } from "next/server";
  import type { NextRequest } from "next/server";

export function middleware(_request: NextRequest) {
  // const url = request.nextUrl.clone();
  // url.pathname = "/dest";
  // return NextResponse.redirect(url);
}
