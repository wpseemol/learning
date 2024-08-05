import jwt from 'jsonwebtoken';

interface CredentialsResponse {
    refreshToken: string;
    expiresIn: number;
    accessToken: string;
}

export function credentialsAccTokenRefToken(
    providerAccountId: string
): CredentialsResponse {
    const accessToken = jwt.sign(
        { userId: providerAccountId },
        process.env.ACCESS_TOKEN_SECRET!,
        { expiresIn: '15m' }
    );

    const refreshToken = jwt.sign(
        { userId: providerAccountId },
        process.env.REFRESH_TOKEN_SECRET!,
        { expiresIn: '7d' }
    );

    return {
        accessToken,
        expiresIn: 60, // 15 minutes in seconds
        refreshToken,
    };
}
