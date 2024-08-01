import Link from 'next/link';
import CredentialLogin from '../login/_component/credential-login';

export default function RegisterPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div
                className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50
            dark:text-gray-800 mt-5 border border-neutral-700/10 shadow-slate-600">
                <h1 className="text-2xl font-bold text-center">Register</h1>
                <CredentialLogin variant="Register" />

                <p className="text-xs text-center sm:px-6 dark:text-gray-600">
                    Already have an account?
                    <Link
                        rel="noopener noreferrer"
                        href="/login"
                        className="underline dark:text-gray-800">
                        Login
                    </Link>
                </p>
            </div>
        </main>
    );
}
