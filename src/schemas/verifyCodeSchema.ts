import { z } from "zod";

export const varifyCodeSchema = z.object({
  code: z.string().length(6, { message: "invalid verification code" }),
});
