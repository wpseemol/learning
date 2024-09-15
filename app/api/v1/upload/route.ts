import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { pipeline, Readable } from 'stream';
import { promisify } from 'util';

const pump = promisify(pipeline);

async function readableWebToNode(
    webStream: ReadableStream<Uint8Array>
): Promise<Readable> {
    const reader = webStream.getReader();
    const nodeStream = new Readable({
        read() {
            reader.read().then(({ done, value }) => {
                if (done) {
                    this.push(null);
                } else {
                    this.push(value);
                }
            });
        },
    });
    return nodeStream;
}

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const file = formData.get('picture');
        const destination = formData.get('destination') as string | null;

        if (!file || !(file instanceof File)) {
            return new NextResponse('File is not provided or is invalid', {
                status: 400,
            });
        }

        if (!destination) {
            return new NextResponse('Destination is not defined', {
                status: 400,
            });
        }

        const directory = path.join(process.cwd(), destination);

        // Ensure the destination directory exists
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }

        const filePath = path.join(directory, file.name);
        const webStream = file.stream();
        const nodeStream = await readableWebToNode(webStream);

        await pump(nodeStream, fs.createWriteStream(filePath));

        console.log(`File uploaded to ${filePath}`);

        return new NextResponse('File upload successful', { status: 200 });
    } catch (error) {
        console.error('Error uploading file:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}

export async function GET() {
    return new NextResponse('some text', { status: 200 });
}
