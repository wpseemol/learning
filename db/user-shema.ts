import mongoose, { Document, Model, Schema } from 'mongoose';

// define an interface representing a document in MongoDB
interface IUser extends Document {
    name: string;
    phone: string;
    userName: string;
    password: string;
}

// create a Schema corresponding to the document interface
const userSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User: Model<IUser> =
    mongoose.models.User ?? mongoose.model('User', userSchema);

export { User };
