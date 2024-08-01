import Link from 'next/link';

export default function NavBar() {
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
