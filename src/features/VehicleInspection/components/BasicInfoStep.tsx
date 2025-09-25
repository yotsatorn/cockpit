import {
  Checkbox,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/components/ui";
import { CheckCircle } from "lucide-react";
import { useFormContext } from "react-hook-form";
import type { MultiFormValues } from "../types/form.types";

export default function BasicInfoStep() {
  const { control } = useFormContext<MultiFormValues>();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
      {/* Header */}
      <div className="md:flex justify-between items-center mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">
          COCKPIT ตรวจเช็คความปลอดภัยเบื้องต้น
        </h1>
        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center gap-6">
            <FormField
              control={control}
              name="branchCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    รหัสสาขา
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="w-32 h-9"
                      placeholder="เช่น BKK001"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name="docNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  No.
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-32 h-9"
                    placeholder="เช่น 001"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    วัน/เดือน/ปี <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="date" className="h-11" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    เวลา <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="time" className="h-11" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="license"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    เลขทะเบียนรถ
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="เช่น กข 1234"
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="shift"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    กะทำงาน
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="เช่น กะเช้า, กะบ่าย"
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    ยี่ห้อรถ
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="เช่น Toyota, Honda"
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="model"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    รุ่นรถ
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="เช่น Camry, Civic"
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="phone"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="text-sm font-medium text-gray-700">
                    เบอร์โทรศัพท์
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="เช่น 08x-xxx-xxxx"
                      className="h-11"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Right Column - Status */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-gray-800">
                สถานะทั่วไป
              </h3>
            </div>

            <div className="space-y-4">
              {/* Maintenance */}
              <FormField
                control={control}
                name="status.needMaintenance"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500 mt-1"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-medium text-gray-700 cursor-pointer">
                        ควรเข้ารับการซ่อมบำรุง
                      </FormLabel>
                      <p className="text-xs text-gray-500">
                        มีปัญหาที่ต้องแก้ไขก่อนใช้งาน
                      </p>
                    </div>
                  </FormItem>
                )}
              />

              {/* Review */}
              <FormField
                control={control}
                name="status.needReview"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500 mt-1"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-medium text-gray-700 cursor-pointer">
                        ควรตรวจเช็คเพิ่มเติม
                      </FormLabel>
                      <p className="text-xs text-gray-500">
                        พบสิ่งผิดปกติเล็กน้อย
                      </p>
                    </div>
                  </FormItem>
                )}
              />

              {/* Normal */}
              <FormField
                control={control}
                name="status.normal"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 p-3 rounded-lg hover:bg-white/50 transition-colors">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 mt-1"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-medium text-gray-700 cursor-pointer">
                        ปกติ
                      </FormLabel>
                      <p className="text-xs text-gray-500">
                        ไม่พบปัญหา พร้อมใช้งาน
                      </p>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
