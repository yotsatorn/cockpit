import type { StepProps } from "../types/step.types";
import { Controller } from "react-hook-form";

export default function PaymentStep({ control, errors }: StepProps) {
  const formatCardNumber = (value: string): string => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(" ");
    } else {
      return v;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">การชำระเงิน</h2>
        <p className="text-gray-600">กรุณากรอกข้อมูลบัตรเครดิต</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          ชื่อผู้ถือบัตร
        </label>
        <Controller
          name="cardholderName"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.cardholderName ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="ชื่อตามบัตรเครดิต"
            />
          )}
        />
        {errors.cardholderName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.cardholderName.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          หมายเลขบัตร
        </label>
        <Controller
          name="cardNumber"
          control={control}
          render={({ field: { onChange, ...field } }) => (
            <input
              {...field}
              onChange={(e) => {
                const formatted = formatCardNumber(e.target.value);
                onChange(formatted);
              }}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.cardNumber ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="1234 5678 9012 3456"
              maxLength={19}
            />
          )}
        />
        {errors.cardNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.cardNumber.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            วันที่หมดอายุ
          </label>
          <Controller
            name="expiryDate"
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <input
                {...field}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length >= 2) {
                    value = value.substring(0, 2) + "/" + value.substring(2, 4);
                  }
                  onChange(value);
                }}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.expiryDate ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="MM/YY"
                maxLength={5}
              />
            )}
          />
          {errors.expiryDate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.expiryDate.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVV
          </label>
          <Controller
            name="cvv"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.cvv ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="123"
                maxLength={4}
              />
            )}
          />
          {errors.cvv && (
            <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
