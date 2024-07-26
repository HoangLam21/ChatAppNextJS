import { Schema, model, models, Document } from "mongoose";
export interface ISingMessage {
  messageId: string;
  chatId: string;
  senderId: string;
  receiverId: string;
  content: string;
  createAt: Date;
}
export const SingMessageSchema = new Schema({
  messageId: { type: String, require: true },
  chatId: { type: String, require: true },
  senderId: { type: String, require: true },
  receiverId: { type: String, require: true },
  content: { type: String, require: true },
  createAt: { type: Date, require: true },
});
export const SingMessage = models.SingMessage || model('SingMesssage',SingMessageSchema);