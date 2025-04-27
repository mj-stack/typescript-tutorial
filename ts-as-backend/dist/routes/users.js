import { Router } from "express";
// @ts-ignore
import { getUserById, getUsers } from "../controllers/users.js";
const router = Router();
// /api/users/
router.get("/", getUsers);
// /api/users/123
router.get("/:id", getUserById);
export default router;
