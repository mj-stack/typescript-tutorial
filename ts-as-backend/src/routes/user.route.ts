import { Router } from "express";
import { sayHello } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/").get(sayHello);

export { userRouter };
