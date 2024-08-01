'use server';

import { signIn } from '@/auth/auth';

export async function doSocialLogin(formData: FormData) {
    const action = formData.get('action') as string;
    await signIn(action, { redirectTo: '/' });
}

export async function doCredentialLogin(formData: FormData) {
    try {
        const response = await signIn('credentials', {
            user: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });

        if (!response || response.error) {
            throw new Error(response?.error || 'Login failed');
        }

        return response;
    } catch (error) {
        console.error('Error during credential login:', error);
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('An unknown error occurred');
        }
    }
}
