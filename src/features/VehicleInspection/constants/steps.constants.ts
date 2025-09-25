import { Droplets, FileText, LifeBuoy, MessageCircle } from "lucide-react";
import { basicInfoSchema, commentsFeedbackSchema, fluidSchema, tireInspectionSchema } from "../schemas/form.schema";
import BasicInfoStep from "../components/BasicInfoStep";
import TireInspectionStep from "../components/TireInspectionStep";
import FluidInspectionStep from "../components/FluidInspectionStep";
import CommentsFeedbackStep from "../components/CommentsFeedbackStep";

export const steps = [
  {
    id: 1,
    title: "ข้อมูลพื้นฐาน",
    shortTitle: "ข้อมูล",
    icon: FileText,
    component: BasicInfoStep,
    schema: basicInfoSchema,
  },
  {
    id: 2,
    title: "ยาง (Tires)",
    shortTitle: "ยาง",
    icon: LifeBuoy,
    component: TireInspectionStep,
    schema: tireInspectionSchema,
  },
  {
    id: 3,
    title: "สารเคลื่อนและของเหลว",
    shortTitle: "ของเหลว",
    icon: Droplets,
    component: FluidInspectionStep,
    schema: fluidSchema,
  },
  {
    id: 4,
    title: "คำอธิบายและข้อเสนอแนะ",
    shortTitle: "ข้อเสนอแนะ",
    icon: MessageCircle,
    component: CommentsFeedbackStep,
    schema: commentsFeedbackSchema,
  },
  // เพิ่มขั้นตอนใหม่ได้ง่าย ๆ
  // {
  //   id: 5,
  //   title: "การตรวจสอบเครื่องยนต์",
  //   shortTitle: "เครื่องยนต์",
  //   icon: Wrench,
  //   component: <EngineInspectionStep />,
  //   schema: engineInspectionSchema,
  // },
  // {
  //   id: 6,
  //   title: "การตรวจสอบระบบไฟฟ้า",
  //   shortTitle: "ไฟฟ้า",
  //   icon: Zap,
  //   component: <ElectricalInspectionStep />,
  //   schema: electricalInspectionSchema,
  // }
] as const;
