import mongoose from "mongoose";
import { mongoURL } from "../config.js";
import { string } from "zod";

export async function connectToDatabase(){
    const connection = await mongoose.connect(String(mongoURL));
}