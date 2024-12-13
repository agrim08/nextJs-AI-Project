import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "message is too small" })
    .max(500, { message: "Message is too long" }),
});
