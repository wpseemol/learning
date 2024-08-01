'use server';

import { signIn } from '@/auth/auth';

export async function doSocialLogin(formData: FormData) {
    const action = formData.get('action') as string;
    await signIn(action, { redirectTo: '/' });
}
