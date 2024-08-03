import NextAuth from 'next-auth';
import { NextRequest } from 'next/server';
import authConfig from './auth/auth.config';
import {
    apiAuthPrefix,
    DEFAULT_LOGIN_REDIRECT,
    loginAuth,
    publicUrl,
} from './routes';

export const { auth } = NextAuth(authConfig);

export async function middleware(request: NextRequest) {
    const { nextUrl } = request;

    const isLoggedIn = !!(await auth());

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoutes = publicUrl.includes(nextUrl.pathname);
    const isAuthRoutes = loginAuth.includes(nextUrl.pathname);

    console.log('is public router:', !isPublicRoutes);
    console.log('is login:', !isLoggedIn);

    if (isApiAuthRoute) {
        return null;
    }

    if (isAuthRoutes) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return null;
    }

    if (!isLoggedIn && !isPublicRoutes) {
        return Response.redirect(new URL('/login', nextUrl));
    }

    return null;
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};
