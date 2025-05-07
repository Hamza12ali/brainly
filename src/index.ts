import express from 'express';
import { userRouter } from './routes/user.routes.js';

export const app = express();

app.use(express.json());
app.use("/api/user",userRouter);
app.get("/",(req,res)=>{
    res.send("Hello Client");
})
