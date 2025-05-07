import mongoose from "mongoose";

const objectId = mongoose.Types.ObjectId;

const userSchema = new mongoose.Schema({
  userId : objectId,
  username: { type: String, required: true },
  password: { type: String, required: true }
});

export const userModel = mongoose.model("User", userSchema);
