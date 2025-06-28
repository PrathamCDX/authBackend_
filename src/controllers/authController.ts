import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

export const signup = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    let user: any;
    if (role) {
      user = await User.create({ email, password: hashedPassword, role });
    } else {
      user = await User.create({
        email,
        password: hashedPassword,
        role: "user",
      });
    }
    const token = jwt.sign({ email: email }, "secretKey", {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "User created", token });
    return;
  } catch (error) {
    res.status(400).json({ error: "Registration failed", details: error });
    return;
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user: any = await User.findOne({ where: { email } });
    if (!user) res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ email: user.email }, "secretKey", {
      expiresIn: "1h",
    });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Login failed", details: error });
  }
};

export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    console.log("email : ", req.user?.email);
    const user = await User.findOne({
      where: { email: req.user?.email },
      attributes: ["email"],
    });

    if (!user) {
      res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Failed to fetch user details", details: error });
  }
};
