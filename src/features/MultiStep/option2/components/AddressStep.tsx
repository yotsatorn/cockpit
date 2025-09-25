import { Controller } from "react-hook-form";
import type { StepProps } from "../types/step.types";

export default function AddressStep({ control, errors }: StepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">ที่อยู่</h2>
        <p className="text-gray-600">กรุณากรอกที่อยู่สำหรับจัดส่ง</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          ที่อยู่
        </label>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              rows={3}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="บ้านเลขที่ ถนน ตำบล อำเภอ"
            />
          )}
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            เมือง/จังหวัด
          </label>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="กรุงเทพฯ"
              />
            )}
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            รหัสไปรษณีย์
          </label>
          <Controller
            name="postalCode"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.postalCode ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="10100"
              />
            )}
          />
          {errors.postalCode && (
            <p className="text-red-500 text-sm mt-1">
              {errors.postalCode.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
