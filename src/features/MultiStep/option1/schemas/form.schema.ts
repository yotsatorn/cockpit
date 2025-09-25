import z from "zod";

export const personalSchema = z.object({
  firstName: z.string().min(1, "กรุณากรอกชื่อ"),
  lastName: z.string().min(1, "กรุณากรอกนามสกุล"),
  age: z
    .string()
    .refine((v) => !!v && !Number.isNaN(Number(v)) && Number(v) > 0, {
      error: "อายุต้องเป็นตัวเลขบวก",
    }),
});

export const addressSchema = z.object({
  address1: z.string().min(1, "กรุณากรอกที่อยู่"),
  city: z.string().min(1, "กรุณากรอกจังหวัด/เมือง"),
  postal: z.string().min(3, "รหัสไปรษณีย์ไม่ถูกต้อง"),
});

export const accountSchema = z
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
export const fullSchema = z.object({
  ...personalSchema.shape,
  ...addressSchema.shape,
  ...accountSchema.shape,
});
