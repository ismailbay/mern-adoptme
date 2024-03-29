import express from "express";
import { updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/auth.js";

const router = express.Router();

router.put("/update/:id", verifyToken, updateUser);

export default router;
