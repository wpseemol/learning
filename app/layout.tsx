import NavBar from '@/components/header-nav';
import AuthProvider from '@/provider/auth';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Learning Auth.js',
    description:
        'This project to learning how to login google facebook and credential login.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>
                <AuthProvider>
                    <NavBar />
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}
