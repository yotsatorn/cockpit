import type { MultiFormValues } from "../types/form.types";
import { useFormContext } from "react-hook-form";

export default function PersonalStep() {
  const { register, formState } = useFormContext<MultiFormValues>();
  const { errors } = formState;

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">ชื่อ</label>
        <input className="border p-2 w-full" {...register("firstName")} />
        {errors.firstName && (
          <p className="text-red-600 text-sm">
            {errors.firstName?.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm">นามสกุล</label>
        <input className="border p-2 w-full" {...register("lastName")} />
        {errors.lastName && (
          <p className="text-red-600 text-sm">
            {errors.lastName?.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm">อายุ</label>
        <input className="border p-2 w-full" {...register("age")} />
        {errors.age && (
          <p className="text-red-600 text-sm">
            {errors.age?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
