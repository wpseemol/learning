'use client';

import { useRouter } from 'next/navigation';
import { Fragment } from 'react';

export default function Home() {
    const router = useRouter();

    async function handelTest() {
        const test = await fetch('/api');
        const token = await test.json();

        router.push(`/test?products=${token.token}`);
    }

    return (
        <Fragment>
            <button onClick={handelTest} className="px-3 py-2 border m-36">
                click
            </button>
        </Fragment>
    );
}
