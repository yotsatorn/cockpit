import z from "zod";

// Schemas สำหรับแต่ละ step
const step1Schema = z.object({
  firstName: z.string().min(2, 'ชื่อต้องมีอย่างน้อย 2 ตัวอักษร'),
  lastName: z.string().min(2, 'นามสกุลต้องมีอย่างน้อย 2 ตัวอักษร'),
  email: z.email('รูปแบบอีเมลไม่ถูกต้อง'),
  phone: z.string().min(10, 'เบอร์โทรต้องมี 10 หลัก').regex(/^[0-9]+$/, 'ใส่ได้เฉพาะตัวเลข'),
});

const step2Schema = z.object({
  address: z.string().min(10, 'ที่อยู่ต้องมีอย่างน้อย 10 ตัวอักษร'),
  city: z.string().min(2, 'เมืองต้องมีอย่างน้อย 2 ตัวอักษร'),
  postalCode: z.string().min(5, 'รหัสไปรษณีย์ต้องมี 5 หลัก').regex(/^[0-9]{5}$/, 'รหัสไปรษณีย์ต้องเป็นตัวเลข 5 หลัก'),
});

const step3Schema = z.object({
  cardNumber: z.string().min(16, 'หมายเลขบัตรต้องมี 16 หลัก').max(19, 'หมายเลขบัตรไม่ถูกต้อง'),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'รูปแบบ MM/YY'),
  cvv: z.string().min(3, 'CVV ต้องมี 3 หลัก').max(4, 'CVV ต้องมี 3-4 หลัก'),
  cardholderName: z.string().min(2, 'ชื่อผู้ถือบัตรต้องมีอย่างน้อย 2 ตัวอักษร'),
});

// Schema รวมทั้งหมด
export const fullSchema = z.object({
  ...step1Schema.shape,
  ...step2Schema.shape,
  ...step3Schema.shape,
});