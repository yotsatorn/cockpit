import type { MultiFormValues } from "../types/form.types";
import { useFormContext } from "react-hook-form";

export default function AccountStep() {
  const { register, formState } = useFormContext<MultiFormValues>();
  const { errors } = formState;

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">อีเมล</label>
        <input className="border p-2 w-full" {...register("email")} />
        {errors.email && (
          <p className="text-red-600 text-sm">
            {errors.email?.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm">รหัสผ่าน</label>
        <input
          type="password"
          className="border p-2 w-full"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-600 text-sm">
            {errors.password?.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm">ยืนยันรหัสผ่าน</label>
        <input
          type="password"
          className="border p-2 w-full"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm">
            {errors.confirmPassword?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
