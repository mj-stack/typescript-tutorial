import express from "express";
import router from "./routes/users";
const app = express();
app.use("/api/users", router);
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is listening at http://localhost:" + PORT);
});
