import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        { name: 'Product 1', price: 19.99 },
        { name: 'Product 2', price: 29.99 },
        { name: 'Product 3', price: 39.99 },
        { name: 'Product 4', price: 49.99 },
        { name: 'Product 5', price: 59.99 },
        { name: 'Product 6', price: 69.99 },
        { name: 'Product 7', price: 79.99 },
        { name: 'Product 8', price: 89.99 },
        { name: 'Product 9', price: 99.99 },
        { name: 'Product 10', price: 109.99 },
    ];
    const token = await jwt.sign({ name: products }, 'test', {
        expiresIn: '10d',
    });

    return NextResponse.json({ token }, { status: 200 });
}
