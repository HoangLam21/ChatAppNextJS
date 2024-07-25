import { Schema, model, models, Document } from "mongoose";
export interface IUser extends Document {
  id: string;
  firstName: string;
  fullName: string;
  nickName: string;
  avatar: string;
  background: string;
  birthday: Date;
  phoneNumber: string;
  email: string;
  address: string;
  description: string;
  personalPoint: Number;
  createAt: Date;
}
export const UserSchema = new Schema({
  id: { type: String, required: true },
  firstName: { type: String, required: true },
  fullName: { type: String, required: true },
  nickName: { type: String, required: true },
  avatar: { type: String, required: true },
  background: { type: String, required: true },
  birthday: { type: Date, require: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
  personalPoint: { type: Number, required: true },
  createAt: { type: Date, required: true },
});
const User = models.User || model('User',UserSchema);