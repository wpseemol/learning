import { client } from '@/db/client-authjs';
import connectMongo from '@/db/connect-db';
import { User as userSchema } from '@/db/user-shema';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import NextAuth, { CredentialsSignin } from 'next-auth';

import authConfig from '@/auth/auth.config';
import { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import Facebook from 'next-auth/providers/facebook';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';

type CustomToken = JWT & {
    accessToken?: string;
    accessTokenExpires?: number;
    refreshToken?: string;
    role?: string;
    error?: string;
    provider: string;
};

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

    pages: {
        signIn: '/login',
        error: '/login/error',
    },

    events: {
        async linkAccount({ user }) {
            await connectMongo();
            await userSchema.findByIdAndUpdate(user.id, {
                userName: crypto.randomUUID(),
                role: 'user',
            });
        },
    },

    callbacks: {
        // async signIn({ user, account }) {
        //     return true;
        // },

        async session({ session, token }) {
            const typedToken = token as CustomToken;
            await connectMongo();
            const user = await userSchema.findById(token?.sub);
            if (user) {
                session.user.role = user.role || 'user';
            } else {
                session.user.role = 'user';
            }

            session.error = typedToken.error ?? null;

            // console.log('session form auth session:', session);
            // console.log('session form auth token:', token);

            return session;
        },
        async jwt({ token, user, account, profile }) {
            console.log('JWT from auth user:', user);
            console.log('JWT from auth account:', account);
            console.log('JWT from auth token:', token);

            const typedToken = token as CustomToken;

            if (user) {
                await connectMongo();
                const response = await userSchema.findById(user.id);
                typedToken.role = response?.role || 'user';
            }

            if (account) {
                switch (account.provider) {
                    case 'google':
                        typedToken.accessToken = account.access_token;
                        typedToken.accessTokenExpires =
                            Date.now() + (account.expires_in ?? 0) * 1000;
                        typedToken.refreshToken = account.refresh_token;
                        typedToken.provider = account.provider;

                        break;
                }
            }

            switch (typedToken.provider) {
                case 'google':
                    if (
                        typedToken.accessTokenExpires &&
                        Date.now() < typedToken.accessTokenExpires
                    ) {
                        return typedToken;
                    }

                    return refreshAccessGoogleToken(typedToken);

                default:
                    return typedToken;
            }
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

async function refreshAccessGoogleToken(token: JWT) {
    const typedToken = token as CustomToken;

    try {
        const url =
            'https://oauth2.googleapis.com/token?' +
            new URLSearchParams({
                client_id: process.env.AUTH_GOOGLE_ID!,
                client_secret: process.env.AUTH_GOOGLE_SECRET!,
                grant_type: 'refresh_token',
                refresh_token: typedToken?.refreshToken!,
            });

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const refreshTokens = await response.json();

        if (!response.ok) {
            throw refreshTokens;
        }

        console.log(response);

        return {
            ...token,
            accessToken: refreshTokens?.access_token,
            accessTokenExpires: Date.now() + refreshTokens?.expires_in * 1000,
            refreshToken: refreshTokens?.refresh_token ?? token.refreshToken,
        };
    } catch (error) {
        return {
            ...token,
            error: 'RefreshAccessTokenError',
        };
    }
}

async function refreshAccessToken(token: CustomToken): Promise<CustomToken> {
    try {
        const response = await fetch('/api/auth/refresh-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                refreshToken: token.refreshToken,
            }),
        });

        const refreshedTokens = await response.json();

        if (!response.ok) {
            throw refreshedTokens;
        }

        return {
            ...token,
            accessToken: refreshedTokens.accessToken,
            accessTokenExpires: Date.now() + refreshedTokens.expiresIn * 1000,
            refreshToken: refreshedTokens.refreshToken ?? token.refreshToken,
        };
    } catch (error) {
        console.error('Error refreshing access token:', error);
        return {
            ...token,
            error: 'RefreshAccessTokenError',
        };
    }
}
