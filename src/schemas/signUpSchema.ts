import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be of atleast 2 characters")
  .max(30, "Username must not be greater than 30 characters")
  .regex(/^[a-zA-Z0-9]+$/, "Username must not contain special characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, { message: "password must be strong" }),
});
