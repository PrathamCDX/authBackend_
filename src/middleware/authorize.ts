import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

const authorize = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ where: { email: req.body?.email } });

    if (!user) res.status(401).json({ error: "User not found" });
    if (!roles.includes(user?.getDataValue("role"))) {
      res
        .status(403)
        .json({ error: "Access denied: insufficient permissions" });
    }

    next();
  };
};

export default authorize;
