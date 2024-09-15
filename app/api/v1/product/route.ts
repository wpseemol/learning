import { NextResponse } from 'next/server';

export async function GET() {
    return new NextResponse('some text', { status: 200 });
}
