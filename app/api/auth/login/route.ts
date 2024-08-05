import connectMongo from '@/db/connect-db';
import { User } from '@/db/user-shema';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    if (request.method !== 'POST') {
        return NextResponse.json(
            { error: 'Method not allowed' },
            { status: 405 }
        );
    }

    const { user, password } = await request.json();

    if (!user || !password) {
        return NextResponse.json(
            { error: 'Username and password are required' },
            { status: 203 }
        );
    }

    try {
        await connectMongo();
        const foundUser = await User.findOne({ userName: user });

        if (!foundUser) {
            return NextResponse.json(
                { error: 'User not font' },
                { status: 401 }
            );
        }

        const isPasswordValid = password === foundUser?.password;

        if (!isPasswordValid) {
            return NextResponse.json(
                { error: 'Password is not match!' },
                { status: 401 }
            );
        }

        const accessToken = jwt.sign(
            { userId: foundUser._id, role: foundUser.role },
            process.env.ACCESS_TOKEN_SECRET!,
            { expiresIn: '15m' }
        );

        const refreshToken = jwt.sign(
            { userId: foundUser._id, role: foundUser.role },
            process.env.REFRESH_TOKEN_SECRET!,
            { expiresIn: '7d' }
        );

        return NextResponse.json(
            {
                accessToken,
                expiresIn: 900, // 15 minutes in seconds
                refreshToken,
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
