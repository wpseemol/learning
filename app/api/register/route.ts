import connectMongo from '@/db/connect-db';
import { User } from '@/db/user-shema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const data = await request.json();

    try {
        await connectMongo();

        const response = await User.create(data);

        return NextResponse.json('Successfully created', { status: 201 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: error.message },
                { status: 500 }
            );
        } else {
            return NextResponse.json(
                { message: 'An unknown error occurred' },
                { status: 500 }
            );
        }
    }
}
