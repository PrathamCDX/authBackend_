import { Request, Response } from "express";
import User from "../models/user.model";

export const resetPassword = async (req: Request, res: Response) => {
  const { email, resetEmail, resetPassword } = req.body;
  try {
    const user: any = await User.findOne({ where: { email: resetEmail } });
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      user.password = resetPassword;
      res.json({ message: "password reset successful" });
    }
  } catch (error) {
    res.status(500).json({ error: "Login failed", details: error });
  }
};
