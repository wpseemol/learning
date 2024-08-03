import { client } from '@/db/client-authjs';
import connectMongo from '@/db/connect-db';
import { User } from '@/db/user-shema';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth from 'next-auth';

import authConfig from '@/auth/auth.config';
import Credentials from 'next-auth/providers/credentials';
import Facebook from 'next-auth/providers/facebook';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt',
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

                    const foundUser = await User.findOne({ userName: user });

                    if (foundUser) {
                        if (foundUser.password === password) {
                            return foundUser;
                        } else {
                            throw new Error('Password does not match');
                        }
                    } else {
                        throw new Error('User not found');
                    }
                } catch (error) {
                    console.error('Authorization error:', error);
                    throw new Error('Internal server error');
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
