import { auth } from '@/auth/auth';
import Link from 'next/link';
import LogoutBtn from './loguout';

export default async function NavBar() {
    const session = await auth();

    return (
        <header className="border-black/15 border-b ">
            <nav className="container mx-auto flex justify-between p-5 items-center">
                <div>
                    <h2 className="text-4xl font-bold">
                        Learn <span>Auth.js</span>
                    </h2>
                </div>
                <ul className="flex space-x-5 font-medium">
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li className="flex items-center space-x-1">
                        {session?.user ? (
                            <>
                                <p>{session?.user.name?.split(' ')[0]}</p>
                                <span>|</span>
                                <LogoutBtn />
                            </>
                        ) : (
                            <Link href="/login">Login</Link>
                        )}
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
