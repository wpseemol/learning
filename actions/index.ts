'use server';

import { signIn } from '@/auth/auth';
import { AuthError } from 'next-auth';

export async function doSocialLogin(formData: FormData) {
    const action = formData.get('action') as string;
    await signIn(action, { redirectTo: '/' });
}

export async function doCredentialLogin(formData: FormData) {
    try {
        const response = await signIn('credentials', {
            user: formData.get('user'),
            password: formData.get('password'),
            redirect: false,
        });

        if (!response || response.error) {
            throw new Error(response?.error || 'Login failed');
        }

        return response;
    } catch (error) {
        if (error instanceof AuthError) {
            console.log('action wpseemol login error:', error.type);
            console.log('message:', error.message);
        }
        throw error;
    }
}
