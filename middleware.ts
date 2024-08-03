import NextAuth from 'next-auth';
import { NextRequest } from 'next/server';
import authConfig from './auth/auth.config';

export const { auth } = NextAuth(authConfig);

export async function middleware(request: NextRequest) {
    console.log('middleware auth:', await auth());

    console.log('middleware req:', request.nextUrl.pathname);

    return null;
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
