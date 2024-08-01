import { Credential } from '@/type-define/credential';

export default function CredentialLogin({ variant = 'Login' }: Credential) {
    return (
        <form action="" className="space-y-6">
            {variant === 'Register' && (
                <>
                    <div className="space-y-1 text-sm">
                        <label
                            htmlFor="fullName"
                            className="block dark:text-gray-600">
                            Full name
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Jon doe"
                            className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-violet-500/40 border"
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
                        />
                    </div>
                </>
            )}

            <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block dark:text-gray-600">
                    Username
                </label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-violet-500/40 border"
                />
            </div>
            <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block dark:text-gray-600">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 border-violet-500/40 border"
                />
                <div className="flex justify-end text-xs dark:text-gray-600">
                    <a rel="noopener noreferrer" href="#">
                        Forgot Password?
                    </a>
                </div>
            </div>
            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
                Sign in
            </button>
        </form>
    );
}
