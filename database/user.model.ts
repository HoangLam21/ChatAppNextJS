import { Schema, model, models, Document } from "mongoose";
export interface IUser extends Document {
  id: string;
  firstName: string;
  fullName: string;
  nickName: string;
  gender: string;
  avatar: string;
  background: string;
  birthday: string;
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
  lastName: { type: String, required: true },
  nickName: { type: String, required: true },
  avatar: { type: String, require: true, default: "" },
  background: { type: String },
  gender: { type: String, require: true, default: "secret" },
  birthday: { type: String, require: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  description: { type: String },
  personalPoint: { type: Number, default: 100 },
  createAt: { type: Date, default: Date.now() },
});
export const User = models.User || model("User", UserSchema);
