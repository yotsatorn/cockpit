import { useFormContext } from "react-hook-form";
import type { MultiFormValues } from "../types/form.types";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/shared/components/ui";

type TireKey = "frontLeft" | "frontRight" | "rearLeft" | "rearRight";

// -------------------------------
// NumberSelector - reusable
// -------------------------------
function NumberSelector({
  selectedValue,
  onChange,
  numbers,
  color = "blue",
}: {
  selectedValue: string;
  onChange: (val: string) => void;
  numbers: (number | string)[];
  color?: "blue" | "red" | "gray";
}) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-600 text-white border-blue-600",
    red: "bg-red-600 text-white border-red-600",
    gray: "bg-gray-600 text-white border-gray-600",
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {numbers.map((n) => {
        const value = n.toString();
        const selected = value === selectedValue;
        return (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            className={`w-12 h-12 rounded-lg text-lg font-semibold border-2 transition-transform duration-150 flex items-center justify-center ${
              selected
                ? `${colorClasses[color]} scale-105 shadow`
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 active:scale-95"
            }`}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}

// -------------------------------
// TireSection component
// - uses FormField for each nested field
// -------------------------------
function TireSection({ title, name }: { title: string; name: TireKey }) {
  const { control } = useFormContext<MultiFormValues>();

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>
          <h3 className="bg-gray-700 text-white px-3 py-1 rounded inline-block text-lg">
            {title}
          </h3>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Condition (3 checkboxes) */}
        <div>
          <p className="text-base font-semibold text-gray-800 mb-3">สถานะ</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <FormField
              control={control}
              name={`${name}.condition.normal`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-3 cursor-pointer border-2 border-gray-100 bg-gray-50 p-4 rounded-lg hover:border-blue-200 transition-colors">
                    <FormControl>
                      <Checkbox
                        className="w-6 h-6 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 mt-1"
                        checked={field.value}
                        onCheckedChange={(v) => field.onChange(Boolean(v))}
                      />
                    </FormControl>
                    <FormDescription className="text-base font-medium text-black">
                      ปกติ
                    </FormDescription>
                    <FormMessage />
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`${name}.condition.damaged`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-3 cursor-pointer border-2 border-gray-100 bg-gray-50 p-4 rounded-lg hover:border-blue-200 transition-colors">
                    <FormControl>
                      <Checkbox
                        className="w-6 h-6 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 mt-1"
                        checked={field.value}
                        onCheckedChange={(v) => field.onChange(Boolean(v))}
                      />
                    </FormControl>
                    <FormDescription className="text-base font-medium text-black">
                      ซ่อมแล้ว
                    </FormDescription>
                    <FormMessage />
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`${name}.condition.punctured`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-3 cursor-pointer border-2 border-gray-100 bg-gray-50 p-4 rounded-lg hover:border-blue-200 transition-colors">
                    <FormControl>
                      <Checkbox
                        className="w-6 h-6 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 mt-1"
                        checked={field.value}
                        onCheckedChange={(v) => field.onChange(Boolean(v))}
                      />
                    </FormControl>
                    <FormDescription className="text-base font-medium text-black">
                      เปลี่ยนแล้ว
                    </FormDescription>
                    <FormMessage />
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Appearance */}
        <div>
          <p className="text-base font-semibold text-gray-800 mb-3">สภาพยาง</p>
          <div className="grid grid-cols-2 gap-3">
            <FormField
              control={control}
              name={`${name}.appearance.bald`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-3 cursor-pointer border-2 border-gray-100 bg-gray-50 p-4 rounded-lg hover:border-blue-200 transition-colors">
                    <FormControl>
                      <Checkbox
                        className="w-6 h-6 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 mt-1"
                        checked={field.value}
                        onCheckedChange={(v) => field.onChange(Boolean(v))}
                      />
                    </FormControl>
                    <FormDescription className="text-base font-medium text-black">
                      บาด
                    </FormDescription>
                    <FormMessage />
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`${name}.appearance.cracked`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-3 cursor-pointer border-2 border-gray-100 bg-gray-50 p-4 rounded-lg hover:border-blue-200 transition-colors">
                    <FormControl>
                      <Checkbox
                        className="w-6 h-6 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 mt-1"
                        checked={field.value}
                        onCheckedChange={(v) => field.onChange(Boolean(v))}
                      />
                    </FormControl>
                    <FormDescription className="text-base font-medium text-black">
                      บวม
                    </FormDescription>
                    <FormMessage />
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`${name}.appearance.irregular`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-3 cursor-pointer border-2 border-gray-100 bg-gray-50 p-4 rounded-lg hover:border-blue-200 transition-colors">
                    <FormControl>
                      <Checkbox
                        className="w-6 h-6 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 mt-1"
                        checked={field.value}
                        onCheckedChange={(v) => field.onChange(Boolean(v))}
                      />
                    </FormControl>
                    <FormDescription className="text-base font-medium text-black">
                      ลึกไม่เรียบ
                    </FormDescription>
                    <FormMessage />
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`${name}.appearance.puncture`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-3 cursor-pointer border-2 border-gray-100 bg-gray-50 p-4 rounded-lg hover:border-blue-200 transition-colors">
                    <FormControl>
                      <Checkbox
                        className="w-6 h-6 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 mt-1"
                        checked={field.value}
                        onCheckedChange={(v) => field.onChange(Boolean(v))}
                      />
                    </FormControl>
                    <FormDescription className="text-base font-medium text-black">
                      ตำทะลุ
                    </FormDescription>
                    <FormMessage />
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Pressure */}
        <div>
          <p className="text-base font-semibold text-gray-800 mb-3">
            แรงดันลมยาง (PSI)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <FormField
                control={control}
                name={`${name}.pressure.first`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-blue-600 mb-2">
                      หลักสิบ
                    </FormLabel>
                    <FormControl>
                      <NumberSelector
                        selectedValue={field.value}
                        onChange={field.onChange}
                        numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        color="blue"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div>
              <FormField
                control={control}
                name={`${name}.pressure.second`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-blue-600 mb-2">
                      หลักหน่วย
                    </FormLabel>
                    <FormControl>
                      <NumberSelector
                        selectedValue={field.value}
                        onChange={field.onChange}
                        numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        color="blue"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        {/* Tread Depth */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">
            ความลึกร่องยางมาตรฐาน (มม.)
          </p>

          <div className="space-y-3">
            <FormField
              control={control}
              name={`${name}.treadDepth.main`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <NumberSelector
                      selectedValue={field.value}
                      onChange={field.onChange}
                      numbers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
                      color="red"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name={`${name}.treadDepth.decimal`}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <NumberSelector
                      selectedValue={field.value}
                      onChange={field.onChange}
                      numbers={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]}
                      color="gray"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// -------------------------------
// Main form component
// -------------------------------
export default function TireInspectionStep() {
  const { control } = useFormContext<MultiFormValues>();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
      {/* Step header */}
      <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg px-6 py-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
            2
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">ยาง (Tires)</h2>
            <p className="text-sm text-gray-600 mt-1">
              ตรวจสอบสภาพยางและแรงดันลม
            </p>
          </div>
        </div>
      </div>

      {/* Tire grid */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TireSection title="ยางหน้า ซ้าย" name="frontLeft" />
          <TireSection title="ยางหน้า ขวา" name="frontRight" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TireSection title="ยางหลัง ซ้าย" name="rearLeft" />
          <TireSection title="ยางหลัง ขวา" name="rearRight" />
        </div>
      </div>

      {/* PSI Reading Section */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <div className="flex flex-wrap items-center gap-6">
          <span className="text-lg font-semibold text-gray-800">
            แรงดันลมยางหลังเดิม (PSI)
          </span>

          <FormField
            control={control}
            name="psiReadable"
            render={({ field }) => (
              <FormItem className="flex items-center gap-3 bg-white p-2 rounded-lg">
                <FormControl>
                  <Checkbox
                    className="w-6 h-6 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500 mt-1"
                    checked={field.value}
                    onCheckedChange={(v) => field.onChange(Boolean(v))}
                  />
                </FormControl>
                <FormLabel className="m-0 text-base font-medium">
                  เต็มแล้ว
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="psiReading"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="PSI"
                    className="w-24 p-5 bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="ml-auto">
            <Button type="button" variant="secondary">
              ยางอะไหล่ (เฉพาะรุ่น)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
