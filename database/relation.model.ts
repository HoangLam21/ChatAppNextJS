import { Schema, model, models, Document } from "mongoose";
export interface IRelation extends Document {
  ids: Schema.Types.ObjectId[];
  relation: string;
}
export const RelationSchema = new Schema({
  ids: { type: Schema.Types.ObjectId, require: true },
  relation: { type: String, required: true },
});
const Relation = models.Relation || model("Relation", RelationSchema);
