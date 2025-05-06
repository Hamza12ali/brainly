import { Router } from "express";
import { loginController, meController, signinController } from "../controller/user.controller.js";
import { signinValidator,LoginValidator,loggedinValidator } from "../validator/validator.js";

export const userRouter = Router();


userRouter.post("/signin",signinValidator,signinController);
userRouter.post("/login",LoginValidator,loginController);
userRouter.post("/me",loggedinValidator,meController);
