import type { Control, FieldErrors } from "react-hook-form";
import type z from "zod";
import type { fullSchema } from "../schemas/step.schema";

export type VehicleInspectionData = z.infer<typeof fullSchema>;

export interface StepProps {
  control: Control<VehicleInspectionData>;
  errors: FieldErrors<VehicleInspectionData>;
}