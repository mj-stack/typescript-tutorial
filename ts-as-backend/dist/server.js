import express from "express";
import { userRouter } from "./routes/user.route.js";
const app = express();
const PORT = 3000;
app.use(userRouter);
app.listen(PORT, () => {
    console.log("Server started");
});
