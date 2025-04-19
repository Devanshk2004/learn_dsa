import { NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  
  // Check if user is authenticated for protected routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL('/auth/signin', request.url));
    }
  }
  
  // Redirect authenticated users away from auth pages
  if (request.nextUrl.pathname.startsWith('/auth/')) {
    if (token && verifyToken(token)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  // Only run middleware on the following paths
  matcher: ['/dashboard/:path*', '/auth/:path*'],
}; 