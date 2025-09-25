import z from "zod";

export const basicInfoSchema = z.object({
  branchCode: z.string().min(1, "กรุณากรอกรหัสสาขา"),
  docNumber: z.string().min(1, "กรุณากรอกหมายเลข"),
  date: z.string(),
  time: z.string(),
  license: z.string(),
  shift: z.string(),
  brand: z.string().optional(),
  model: z.string().optional(),
  phone: z.string().optional(),
  status: z.object({
    needMaintenance: z.boolean().default(false),
    needReview: z.boolean().default(false),
    normal: z.boolean().default(false),
  }),
});

// -------------------------------
// step 2
// -------------------------------
const conditionSchema = z.object({
  normal: z.boolean().default(false),
  damaged: z.boolean().default(false),
  punctured: z.boolean().default(false),
});

const appearanceSchema = z.object({
  bald: z.boolean().default(false),
  cracked: z.boolean().default(false),
  irregular: z.boolean().default(false), // ลึกไม่เรียบ
  puncture: z.boolean().default(false), // ตำทะลุ
});

const pressureSchema = z.object({
  first: z.string().default("0"),
  second: z.string().default("0"),
});

const treadSchema = z.object({
  main: z.string().default("0"),
  decimal: z.string().default("0"),
});

const tireSchema = z.object({
  condition: conditionSchema,
  appearance: appearanceSchema,
  pressure: pressureSchema,
  treadDepth: treadSchema,
});

export const tireInspectionSchema = z.object({
  frontLeft: tireSchema,
  frontRight: tireSchema,
  rearLeft: tireSchema,
  rearRight: tireSchema,
  psiReadable: z.boolean().default(false),
  psiReading: z.string().min(1, "ต้องมีอย่างน้อย 1"),
});

// -------------------------------
// step 3
// -------------------------------
const fluidItemSchema = z.object({
  changed: z.boolean().default(false),
  refilled: z.boolean().default(false),
  colorRed: z.boolean().default(false),
  colorBlue: z.boolean().default(false),
  levelHigh: z.boolean().default(false),
  levelLow: z.boolean().default(false),
});

const batteryVoltSchema = z.object({
  v12_4: z.boolean().default(false),
  v12_5: z.boolean().default(false),
  v12_6: z.boolean().default(false),
  v12_7: z.boolean().default(false),
  v12_8: z.boolean().default(false),
});

const batteryStartVoltSchema = z.object({
  v9: z.boolean().default(false),
  v10: z.boolean().default(false),
  v11: z.boolean().default(false),
});

const batteryCcaSchema = z.object({
  ok: z.boolean().default(false),
  below: z.boolean().default(false),
});

export const fluidSchema = z.object({
  // fluids
  engineOil: fluidItemSchema,
  powerSteerOil: fluidItemSchema,
  clutchOil: fluidItemSchema,
  reservoirWater: fluidItemSchema,
  brakeOil: fluidItemSchema,
  washerWater: fluidItemSchema,
  atOil: fluidItemSchema,

  // battery
  batteryChanged: z.boolean().default(false),
  batteryVoltage: batteryVoltSchema,
  batteryStartVoltage: batteryStartVoltSchema,
  batteryCCA: batteryCcaSchema,
});

// -------------------------------
// step 4
// -------------------------------
export const commentsFeedbackSchema = z.object({
  description: z.string().max(2000).optional(),
  ownerSignature: z.string().min(1, "กรุณากรอกชื่อ (เจ้าของรถ/ผู้รับรถ)"),
  inspectorSignature: z.string().min(1, "กรุณากรอกชื่อ (ผู้ตรวจสอบ)"),
});

// combine to a single schema for final validation
export const fullSchema = z.object({
  ...basicInfoSchema.shape,
  ...tireInspectionSchema.shape,
  ...fluidSchema.shape,
  ...commentsFeedbackSchema.shape,
});
