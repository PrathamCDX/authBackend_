// types/express/index.d.ts
import { Request } from "express";

declare module "express-serve-static-core" {
  interface Request {
    user?: any; // or specify the type, e.g., { id: number }
  }
}
