import { auth } from '@/auth/auth';
import HomeUserInfo from '@/components/home-use-section';

export default async function HomePage() {
    const session = await auth();
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h2 className="text-3xl font-semibold">Home page</h2>
            <HomeUserInfo />

            <h2>{session?.user?.name}</h2>
        </main>
    );
}
