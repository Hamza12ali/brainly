import { Router } from "express";
import { auth } from "../middlewares/authorized.js";
import { newContent } from "../controller/link.controller.js";
import { contentValidator } from "../validator/content.js";

export const linkRouter = Router();


linkRouter.post("/create",auth,contentValidator,newContent)