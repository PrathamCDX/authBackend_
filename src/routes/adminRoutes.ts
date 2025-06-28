import express from "express";
import authenticate from "../middleware/authenticate";
import authorize from "../middleware/authorize";
import { resetPassword } from "../controllers/adminController";
import validateRequest from "../middleware/validateRequest";
import { resetPasswordSchema } from "../schemas/auth.schema";

const adminRouter = express.Router();

adminRouter.patch(
  "/reset",
  validateRequest(resetPasswordSchema),
  authorize(["admin"]), // only admin role allowed
  resetPassword
);

export default adminRouter;
