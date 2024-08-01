'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';

export default function HomeUserInfo() {
    const { data: session, status } = useSession();

    console.log('session:', session);

    return (
        session?.user && (
            <div className="mt-5 flex flex-col items-center space-y-2">
                <h2 className="text-2xl font-medium">Welcome you are login</h2>
                <p>{session?.user?.name}</p>
                {session?.user?.image && (
                    <figure className="rounded overflow-hidden">
                        <Image
                            width={100}
                            height={100}
                            className="w-auto h-full"
                            src={session?.user?.image}
                            alt={session?.user?.name!}
                        />
                    </figure>
                )}
            </div>
        )
    );
}
