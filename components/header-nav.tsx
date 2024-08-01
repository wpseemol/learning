import Link from 'next/link';

export default function NavBar() {
    return (
        <header className="container mx-auto">
            <nav className="flex justify-between p-5">
                <div>
                    <h2 className="text-4xl font-bold">
                        Learn <span>Auth.js</span>
                    </h2>
                </div>
                <ul className="flex space-x-3">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
