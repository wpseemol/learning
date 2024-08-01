import NextAuth from 'next-auth';

import Credentials from 'next-auth/providers/credentials';
import Facebook from 'next-auth/providers/facebook';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        Credentials({
            async authorize(
                credentials: Partial<Record<string, unknown>>,
                request: Request
            ) {
                if (!credentials) return null;

                try {
                    const { user, password } = credentials as {
                        user: string;
                        password: string;
                    };

                    if (user && password) {
                        return { id: '1', name: user };
                    } else {
                        throw new Error('User not found');
                    }
                } catch (error) {
                    console.error(error);
                    return null; // Return null if there's an error or credentials are invalid
                }
            },
        }),

        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        Facebook({
            clientId: process.env.AUTH_FACEBOOK_ID,
            clientSecret: process.env.AUTH_FACEBOOK_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
    ],
});
