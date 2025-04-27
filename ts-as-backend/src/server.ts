import express, { Express, Request, Response } from "express";
import { userRouter } from "./routes/user.route.js";

const app: Express = express();

const PORT = 3000;

app.use(userRouter);

app.listen(PORT, () => {
  console.log("Server started");
});
