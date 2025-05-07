import dotenv from "dotenv"
dotenv.config();
export const port = process.env.PORT || 3000;
export const userSecretKey = process.env.USER_SECRETKEY; 
export const mongoURL = process.env.MONGO_URL;