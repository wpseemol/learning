import { client } from '@/db/client-authjs';
import connectMongo from '@/db/connect-db';
import { User as userSchema } from '@/db/user-shema';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth, { CredentialsSignin } from 'next-auth';

import authConfig from '@/auth/auth.config';
import Credentials from 'next-auth/providers/credentials';
import Facebook from 'next-auth/providers/facebook';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

class InvalidLoginError extends CredentialsSignin {
    message: string = 'Password is not match';
}
class InvalidLoginError2 extends CredentialsSignin {
    message: string = 'user account is not found.';
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async session({ session, token }) {
            await connectMongo();
            const user = await userSchema.findById(token?.sub);
            if (user) {
                session.user.role = user.role || 'user';
            } else {
                session.user.role = 'user';
            }

            return session;
        },
        async jwt({ token, user, account, profile }) {
            return token;
        },
    },

    ...authConfig,

    adapter: MongoDBAdapter(client),
    providers: [
        Credentials({
            name: 'Credentials',
            type: 'credentials',

            credentials: {
                user: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(
                credentials: Partial<Record<string, unknown>>,
                request: Request
            ) {
                if (!credentials) return null;

                try {
                    await connectMongo();

                    const { user, password } = credentials as {
                        user: string;
                        password: string;
                    };

                    const foundUser = await userSchema.findOne({
                        userName: user,
                    });

                    if (foundUser) {
                        if (foundUser.password === password) {
                            return foundUser;
                        } else {
                            throw new InvalidLoginError();
                        }
                    } else {
                        throw new InvalidLoginError2();
                    }
                } catch (error) {
                    console.error('Authorization error:', error);
                    throw error;
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
