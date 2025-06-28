import { z } from "zod";

export const signupSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(["user", "admin"]).optional(), // optional for safety
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
});

export const authHeaderSchema = z.object({
  headers: z.object({
    authorization: z.string().startsWith("Bearer "),
  }),
});

export const resetPasswordSchema = z.object({
  body: z.object({
    email: z.string().email(),
    resetEmail: z.string().email(),
    resetPassword: z.string().min(6),
  }),
});
