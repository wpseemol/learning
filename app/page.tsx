import HomeUserInfo from '@/components/home-use-section';

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h2 className="text-3xl font-semibold">Home page</h2>
            <HomeUserInfo />
        </main>
    );
}
