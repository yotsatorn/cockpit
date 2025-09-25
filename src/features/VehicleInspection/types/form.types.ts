import type z from "zod";
import type { fullSchema } from "../schemas/form.schema";

export type MultiFormValues = z.infer<typeof fullSchema>;
