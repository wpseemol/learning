import mongoose, { Document, Model, Schema } from 'mongoose';

// define an interface representing a document in MongoDB
interface IUser extends Document {
    name: string;
    phone: string;
    userName: string;
    password: string;
    role: 'user' | 'creator' | 'admin';
}

// create a Schema corresponding to the document interface
const userSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: false },
    userName: { type: String, required: false, unique: true, default: null },
    password: { type: String, required: false },
    role: { type: String, required: false, default: 'user' },
});

const User: Model<IUser> =
    mongoose.models.User ?? mongoose.model('User', userSchema);

export { User };
