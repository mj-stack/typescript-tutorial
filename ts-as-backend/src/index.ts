import express, { Express, Request, Response } from "express";
import router from "./routes/users";

const app: Express = express();

app.use("/api/users", router);

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log("Server is listening at http://localhost:" + PORT);
});
