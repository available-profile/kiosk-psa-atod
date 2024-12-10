// models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  email: string;
  role: 'admin' | 'consumer';
}

const userSchema = new Schema<IUser>({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['admin', 'consumer'], required: true }
});

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);

