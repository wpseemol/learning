import mongoose, { Document, Model, Schema, Types } from 'mongoose';

// define an interface representing a document in MongoDB
interface Account extends Document {
    access_token: string;
    id_token?: string;
    refresh_token?: string;
    expires_at?: number;
    scope?: string;
    token_type?: string;
    providerAccountId?: string;
    provider?: string;
    type?: string;
    userId: Types.ObjectId;
}

// create a Schema corresponding to the document interface
const userSchema: Schema<Account> = new Schema({
    access_token: { type: String, required: true },
    id_token: { type: String, required: false },
    refresh_token: {
        type: String,
        required: false,
    },
    expires_at: { type: Number, required: false },
    scope: { type: String, required: false },
    token_type: { type: String, required: false, default: 'bearer' },
    providerAccountId: { type: String, required: false },
    provider: { type: String, required: false },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to a User model if you have one
        required: true,
    },
});

const AccountSchema: Model<Account> =
    mongoose.models.Account ?? mongoose.model('Account', userSchema);

export { AccountSchema };
