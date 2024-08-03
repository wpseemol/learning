'use client';

import { doCredentialLogin } from '@/actions';
import { Toast, ToastProvider } from '@/components/ui/toast';
import { toast } from '@/components/ui/use-toast';
import { Credential } from '@/type-define/credential';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function CredentialLogin({ variant = 'Login' }: Credential) {
    const router = useRouter();

    async function handelFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        switch (variant) {
            case 'Register':
                const name = formData.get('name');
                const phone = formData.get('phoneNumber');
                const userName = formData.get('user');
                const password = formData.get('password');

                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify({ name, phone, userName, password }),
                });

                console.log(response);

                router.push('/login');

                toast({
                    title: 'Created',
                    description: 'User Successful created!',
                });

                break;

            case 'Login':
                try {
                    const response = await doCredentialLogin(formData);

                    router.prefetch('/');
                    router.refresh();

                    console.log(response);
                } catch (error) {
                    console.log(error);
                }
                break;
        }
    }

    return (
        <>
            <form onSubmit={handelFormSubmit} className="space-y-6">
                {variant === 'Register' && (
                    <>
                        <div className="space-y-1 text-sm">
                            <label
                                htmlFor="name"
                                className="block dark:text-gray-600">
                                Full name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Jon doe"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-violet-500/40 border"
                                required
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label
                                htmlFor="phoneNumber"
                                className="block dark:text-gray-600">
                                Phone number
                            </label>
                            <input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="01700000999"
                                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-violet-500/40 border"
                                required
                            />
                        </div>
                    </>
                )}

                <div className="space-y-1 text-sm">
                    <label htmlFor="user" className="block dark:text-gray-600">
                        Username
                    </label>
                    <input
                        type="text"
                        name="user"
                        id="user"
                        placeholder="user"
                        className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-violet-500/40 border"
                        required
                    />
                </div>
                <div className="space-y-1 text-sm">
                    <label
                        htmlFor="password"
                        className="block dark:text-gray-600">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-violet-500/40 border"
                        required
                    />
                    <div className="flex justify-end text-xs dark:text-gray-600">
                        <a rel="noopener noreferrer" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </div>
                <button className="block w-full p-3 text-center rounded-sm bg-violet-600 text-gray-50 dark:text-gray-50 dark:bg-violet-600">
                    Register
                </button>
            </form>
            <ToastProvider>
                <Toast />
            </ToastProvider>
        </>
    );
}
