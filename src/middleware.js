import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('token')?.value; 
  const { pathname } = req.nextUrl;

  const rutasPublicas = ['/'];

  if (!token && !rutasPublicas.includes(pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (token && rutasPublicas.includes(pathname)) {
    return NextResponse.redirect(new URL('/Dashboard', req.url));
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
