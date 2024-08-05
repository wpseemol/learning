import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

interface UserPayload extends JwtPayload {
    userId: string;
}

export async function POST(request: NextRequest) {
    if (request.method !== 'POST') {
        return NextResponse.json(
            { error: 'Method not allowed' },
            { status: 405 }
        );
    }

    const { refreshToken } = await request.json();

    if (!refreshToken) {
        return NextResponse.json(
            { error: 'Refresh token is required' },
            { status: 405 }
        );
    }

    try {
        const user = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET!
        ) as UserPayload;

        const accessToken = jwt.sign(
            { userId: user.userId },
            process.env.ACCESS_TOKEN_SECRET!,
            { expiresIn: '15m' }
        );

        const newRefreshToken = jwt.sign(
            { userId: user.userId },
            process.env.REFRESH_TOKEN_SECRET!,
            { expiresIn: '7d' }
        );

        return NextResponse.json(
            { accessToken, expiresIn: 900 },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: 'Invalid refresh token' },
            { status: 403 }
        );
    }
}
