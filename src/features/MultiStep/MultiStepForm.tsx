import { useState } from "react";
import { useForm, FormProvider, type SubmitHandler, useFormContext } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// ----------------------
// Schemas & Types
// ----------------------
const personalSchema = z.object({
  firstName: z.string().min(1, "กรุณากรอกชื่อ"),
  lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  age: z
    .string()
    .refine((v) => !!v && !Number.isNaN(Number(v)) && Number(v) > 0, {
      error: "อายุต้องเป็นตัวเลขบวก",
    }),
});

const addressSchema = z.object({
  address1: z.string().min(1, "กรุณากรอกที่อยู่"),
  city: z.string().min(1, "กรุณากรอกจังหวัด/เมือง"),
  postal: z.string().min(3, "รหัสไปรษณีย์ไม่ถูกต้อง"),
});

const accountSchema = z
  .object({
    email: z.email("รูปแบบอีเมลไม่ถูกต้อง"),
    password: z.string().min(6, "รหัสผ่านต้องอย่างน้อย 6 ตัวอักษร"),
    confirmPassword: z.string().min(6, "ยืนยันรหัสผ่าน"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    error: "รหัสผ่านไม่ตรงกัน",
  });

// combine to a single schema for final validation
const fullSchema = z.object({
  ...personalSchema.shape,
  ...addressSchema.shape,
  ...accountSchema.shape,
});

export type MultiFormValues = z.infer<typeof fullSchema>;

// ----------------------
// Step components
// ----------------------
function PersonalStep() {
  const { register, formState } = useFormContext<MultiFormValues>();
  const { errors } = formState;

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">ชื่อ</label>
        <input className="border p-2 w-full" {...register("firstName")} />
        {errors.firstName && (
          <p className="text-red-600 text-sm">{errors.firstName?.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">นามสกุล</label>
        <input className="border p-2 w-full" {...register("lastName")} />
        {errors.lastName && (
          <p className="text-red-600 text-sm">{errors.lastName?.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">อายุ</label>
        <input className="border p-2 w-full" {...register("age")} />
        {errors.age && (
          <p className="text-red-600 text-sm">{errors.age?.message as string}</p>
        )}
      </div>
    </div>
  );
}

function AddressStep() {
  const { register, formState } = useFormContext<MultiFormValues>();
  const { errors } = formState;

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">ที่อยู่</label>
        <input className="border p-2 w-full" {...register("address1")} />
        {errors.address1 && (
          <p className="text-red-600 text-sm">{errors.address1?.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">จังหวัด/เมือง</label>
        <input className="border p-2 w-full" {...register("city")} />
        {errors.city && (
          <p className="text-red-600 text-sm">{errors.city?.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">รหัสไปรษณีย์</label>
        <input className="border p-2 w-full" {...register("postal")} />
        {errors.postal && (
          <p className="text-red-600 text-sm">{errors.postal?.message as string}</p>
        )}
      </div>
    </div>
  );
}

function AccountStep() {
  const { register, formState } = useFormContext<MultiFormValues>();
  const { errors } = formState;

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm">อีเมล</label>
        <input className="border p-2 w-full" {...register("email")} />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email?.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">รหัสผ่าน</label>
        <input type="password" className="border p-2 w-full" {...register("password")} />
        {errors.password && (
          <p className="text-red-600 text-sm">{errors.password?.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm">ยืนยันรหัสผ่าน</label>
        <input type="password" className="border p-2 w-full" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <p className="text-red-600 text-sm">{errors.confirmPassword?.message as string}</p>
        )}
      </div>
    </div>
  );
}

// ----------------------
// Main MultiStep component
// ----------------------
export default function MultiStepForm() {
  const [step, setStep] = useState(0);

  const methods = useForm<MultiFormValues>({
    resolver: zodResolver(fullSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      address1: "",
      city: "",
      postal: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const steps = [
    { id: "personal", label: "ข้อมูลส่วนตัว", component: <PersonalStep />, schema: personalSchema },
    { id: "address", label: "ที่อยู่", component: <AddressStep />, schema: addressSchema },
    { id: "account", label: "บัญชี", component: <AccountStep />, schema: accountSchema },
  ];

  const isLast = step === steps.length - 1;

  const onSubmit: SubmitHandler<MultiFormValues> = (data) => {
    // ตัวอย่าง: ส่งข้อมูลไป API หรือทำอะไรต่อ
    // ที่นี่เราทำเป็น console.log เพื่อให้เห็นผล
    console.log("ส่งข้อมูลสำเร็จ: ", data);
    alert("ส่งข้อมูลสำเร็จ — ดู console.log");
    // ถ้าต้องการ reset: methods.reset()
  };

  // go next: validate current fields only

const nextStep = async () => {
    const currentFieldNames = Object.keys(steps[step].schema.shape) as (keyof MultiFormValues)[];
    const valid = await methods.trigger(currentFieldNames);
    if (valid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => Math.max(0, s - 1));

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <div className="mb-4 flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium  
                ${i === step ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              {i + 1}
            </div>
            <div className={`text-sm ${i === step ? "font-semibold" : "text-gray-500"}`}>{s.label}</div>
          </div>
        ))}
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          noValidate
        >
          <div className="mb-6">{steps[step].component}</div>

          <div className="flex justify-between gap-3">
            <button
              type="button"
              onClick={prevStep}
              disabled={step === 0}
              className="px-4 py-2 rounded border disabled:opacity-50"
            >
              ย้อนกลับ
            </button>

            <div className="flex gap-2">
              {!isLast && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 py-2 rounded bg-blue-600 text-white"
                >
                  ถัดไป
                </button>
              )}

              {isLast && (
                <button type="submit" className="px-4 py-2 rounded bg-green-600 text-white">
                  ส่งข้อมูล
                </button>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
