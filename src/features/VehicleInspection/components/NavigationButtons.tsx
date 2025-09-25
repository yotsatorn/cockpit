import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { steps } from "../constants/steps.constants";
import { Link } from "react-router";

interface NavigationButtonsProps {
  currentStep: number;
  onPrevStep: () => void;
  onNextStep: () => void;
}

export default function NavigationButtons({
  currentStep,
  onPrevStep,
  onNextStep,
}: NavigationButtonsProps) {
  const isLast = currentStep === steps.length - 1;

  return (
    <div className="flex justify-between items-center mt-8">
      <button
        onClick={onPrevStep}
        disabled={currentStep === 0}
        className="flex items-center gap-2 px-4 md:px-8 py-3 md:py-4 text-gray-600 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-200 active:scale-95 text-base md:text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        <span className="hidden sm:inline">ก่อนหน้า</span>
        <span className="sm:hidden">ย้อน</span>
      </button>

      {/* ปุ่มกลับหน้าหลัก */}
      <Link
        to="/menu"
        className="flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 text-gray-700 border-2 border-gray-400 rounded-xl hover:bg-gray-100 transition-all duration-200 active:scale-95 text-base md:text-lg font-medium"
      >
        <Home className="w-4 h-4 md:w-5 md:h-5" />
        <span className="hidden sm:inline">กลับหน้าหลัก</span>
        <span className="sm:hidden">หน้าหลัก</span>
      </Link>

      {isLast && (
        <button
          type="submit"
          className="flex items-center gap-2 px-4 md:px-8 py-3 md:py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all duration-200 active:scale-95 text-base md:text-lg font-semibold shadow-lg"
        >
          <span className="hidden sm:inline">ส่งข้อมูล</span>
          <span className="sm:hidden">ส่ง</span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}

      {!isLast && (
        <button
          type="button"
          onClick={onNextStep}
          className="flex items-center gap-2 px-4 md:px-8 py-3 md:py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 active:scale-95 text-base md:text-lg font-semibold shadow-lg"
        >
          <span className="hidden sm:inline">ถัดไป</span>
          <span className="sm:hidden">ถัดไป</span>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      )}
    </div>
  );
}
