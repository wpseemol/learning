import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();

    const test = jwt.decode(body.token);

    console.log(test);

    return NextResponse.json({ result: 'soksoe' }, { status: 201 });
}
