import { Types } from 'mongoose';

type Variant = 'Login' | 'Register';

interface Credential {
    variant?: Variant;
}
//  next user type problem solve

interface IsHasAccount {
    access_token: string;
    id_token?: string;
    refresh_token?: string;
    expires_at?: number;
    scope?: string;
    token_type?: string;
    providerAccountId?: string;
    provider?: string;
    type?: string;
    userId: Types.ObjectId;
}

export type { Credential, IsHasAccount };

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
     */
    interface Session {
        user: {
            /** The user's postal address. */
            id: string;
            role: 'user' | 'admin' | 'creator';
            name: string;
            image: string;
            email: string;
            emailVerified?: boolean;
        };

        error: string | null;
    }

    interface JWT {
        accessToken: string;
        accessTokenExpires: number;
        refreshToken: string;
    }
}
