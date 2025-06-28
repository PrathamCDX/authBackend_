import express from "express";
import { login, signup } from "../controllers/authController";
import validateRequest from "../middleware/validateRequest";
import { signupSchema, loginSchema } from "../schemas/auth.schema";
import authenticate from "../middleware/authenticate";
import { getCurrentUser } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/signup", validateRequest(signupSchema), signup);
authRouter.post("/login", validateRequest(loginSchema), login);
authRouter.get("/me", authenticate, getCurrentUser);
export default authRouter;
