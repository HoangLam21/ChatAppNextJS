import { Schema, model, models, Document } from "mongoose";
export interface ICoupleChat {
  chatId: string;
  ids: Schema.Types.ObjectId[];
  message: Schema.Types.ObjectId[];
}
export const coupleChatSchema = new Schema({
  chatId: { type: String, require: true },
  ids: { type: Schema.Types.ObjectId, require: true },
  messages: { type: Schema.Types.ObjectId, require: true },
});
