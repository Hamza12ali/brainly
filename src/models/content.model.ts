
import mongoose from "mongoose";
const objectId = mongoose.Types.ObjectId;

const contentSchema = new mongoose.Schema({
  contentId:objectId,
  title: { type: String, required: true },
  link: { type: String, required: true },
  userId:{type:objectId,ref:'User',required:true}
});

export const contentModel = mongoose.model("content", contentSchema);
