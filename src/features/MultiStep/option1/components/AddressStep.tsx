import { useFormContext } from "react-hook-form";
import type { MultiFormValues } from "../types/form.types";

export default function AddressStep() {
  const { register, formState } = useFormContext<MultiFormValues>();
  const { errors } = formState;

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">ที่อยู่</label>
        <input className="border p-2 w-full" {...register("address1")} />
        {errors.address1 && (
          <p className="text-red-600 text-sm">
            {errors.address1?.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm">จังหวัด/เมือง</label>
        <input className="border p-2 w-full" {...register("city")} />
        {errors.city && (
          <p className="text-red-600 text-sm">
            {errors.city?.message as string}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm">รหัสไปรษณีย์</label>
        <input className="border p-2 w-full" {...register("postal")} />
        {errors.postal && (
          <p className="text-red-600 text-sm">
            {errors.postal?.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
