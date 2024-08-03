type Variant = 'Login' | 'Register';

interface Credential {
    variant?: Variant;
}
//  next user type problem solve
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
    }
}

export type { Credential };
