import mongoose, { Mongoose } from 'mongoose';

const databases = 'learning-auth';
const MONGO_URI = process.env.NEXT_PUBLIC_MONGODB_CONNECT_URL + databases;

interface Cached {
    connection?: Mongoose | null;
    promise?: Promise<Mongoose> | null;
}

const cached: Cached = {
    connection: null,
    promise: null,
};

async function connectMongo(): Promise<Mongoose> {
    if (!MONGO_URI) {
        throw new Error(
            'Please define the MONGO_URI environment variable inside .env.local'
        );
    }

    if (cached.connection) {
        return cached.connection;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGO_URI, opts);
    }

    try {
        cached.connection = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.connection;
}

export default connectMongo;
