import { z } from "zod";

export const createBetSchema = z.object({
  challanger_name: z.string().min(1, "Jméno je povinné"),
  challanger_email: z.string().email("Neplatný email"),
  rival_name: z.string().min(1, "Jméno rivala je povinné"),
  rival_email: z.string().email("Neplatný email").optional(),
  betTitle: z.string().optional(),
  stack: z.string().min(1, "Sázka je povinná"),
  deadline: z.string().min(1, "Deadline je povinný"),
  visibility: z.enum(["public", "private"]),
});

// Infer TypeScript typ ze Zod schématu
export type CreateBetDTO = z.infer<typeof createBetSchema>;

// Response typy
export const betResponseSchema = z.object({
  success: z.boolean(),
  data: z.object({
    _id: z.string(),
    betUrl: z.string(),
  }).merge(createBetSchema).optional(),
  message: z.string().optional(),
});

export type BetResponse = z.infer<typeof betResponseSchema>;
