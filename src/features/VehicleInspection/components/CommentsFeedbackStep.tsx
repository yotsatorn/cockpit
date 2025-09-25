// ---------------------
// Helpers

import type { MultiFormValues } from "../types/form.types";
import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input, Textarea } from "@/shared/components/ui";

// ---------------------
function formatThaiBuddhistDatetime(d = new Date()) {
  // day month (Thai locale) + buddhist year + เวลา HH:MM
  const day = d.getDate();
  const month = new Intl.DateTimeFormat("th-TH", { month: "long" }).format(d); // เดือนภาษาไทย
  const yearBE = d.getFullYear() + 543;
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  return `${day} ${month} ${yearBE} เวลา ${hours}:${minutes}`;
}

// ---------------------
// Component
// ---------------------
export default function CommentsFeedbackStep() {
  const defaultDateTime = formatThaiBuddhistDatetime();
  const { control } = useFormContext<MultiFormValues>();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      {/* Step Header */}
      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg px-6 py-4 mb-6">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              ขั้นตอน การลงนาม
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              กรอกข้อมูลและลงนามเพื่อสิ้นสุดการตรวจสอบ
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            คำอธิบายและข้อเสนอแนะ
          </h3>
        </div>

        <div className="p-6 md:p-8 space-y-8">
          {/* Description textarea */}
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold text-gray-700 block mb-4">
                  คำอธิบายและข้อเสนอแนะอื่นๆ (ถ้ามี)
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="กรุณากรอกคำอธิบาย ข้อเสนอแนะ หรือหมายเหตุเพิ่มเติม..."
                    className="w-full min-h-[160px] md:min-h-[200px] text-lg leading-6 p-6 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 resize-none transition-all duration-200"
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-base mt-2" />
              </FormItem>
            )}
          />

          {/* Signature section */}
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">
              การลงนาม
            </h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Owner signature */}
              <FormField
                control={control}
                name="ownerSignature"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-xl p-6 shadow-sm">
                    <FormLabel className="block text-center mb-4">
                      <span className="text-lg font-bold text-gray-800 block mb-2">
                        ลงชื่อ
                      </span>
                      <span className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                        เจ้าของรถ / ผู้รับรถ
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="กรุณากรอกชื่อ-นามสกุล"
                        className="text-lg text-center p-4 h-14 border-0 border-b-3 border-gray-300 bg-transparent rounded-none focus:border-blue-500 focus:ring-0 transition-colors duration-200"
                        style={{ fontSize: "18px" }}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-base mt-2 text-center" />
                    <div className="mt-4 pt-2 border-t border-gray-200">
                      <p className="text-sm text-gray-500 text-center">
                        ผู้ที่ได้รับการตรวจสอบรถยนต์
                      </p>
                    </div>
                  </FormItem>
                )}
              />

              {/* Inspector signature */}
              <FormField
                control={control}
                name="inspectorSignature"
                render={({ field }) => (
                  <FormItem className="bg-white rounded-xl p-6 shadow-sm">
                    <FormLabel className="block text-center mb-4">
                      <span className="text-lg font-bold text-gray-800 block mb-2">
                        ลงชื่อ
                      </span>
                      <span className="text-sm text-gray-600 bg-green-50 px-3 py-1 rounded-full">
                        ผู้ตรวจสอบ
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="กรุณากรอกชื่อ-นามสกุล"
                        className="text-lg text-center p-4 h-14 border-0 border-b-3 border-gray-300 bg-transparent rounded-none focus:border-green-500 focus:ring-0 transition-colors duration-200"
                        style={{ fontSize: "18px" }}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-base mt-2 text-center" />
                    <div className="mt-4 pt-2 border-t border-gray-200">
                      <p className="text-sm text-gray-500 text-center">
                        เจ้าหน้าที่ผู้ทำการตรวจสอบ
                      </p>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Date and time */}
          <div className="bg-blue-50 rounded-xl p-6 text-center">
            <p className="text-gray-600 mb-2">วันที่และเวลาในการตรวจสอบ</p>
            <p className="text-xl font-bold text-blue-600">{defaultDateTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
