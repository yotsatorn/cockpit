import { Check, ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonsProps {
  currentStep: number;
  onPrevStep: () => void;
  onNextStep: () => void;
  onSubmit: () => void;
}

export default function NavigationButtons({
  currentStep,
  onPrevStep,
  onNextStep,
  onSubmit,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between mt-8">
      <button
        type="button"
        onClick={onPrevStep}
        disabled={currentStep === 1}
        className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors ${
          currentStep === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        <ChevronLeft size={20} className="mr-1" />
        ก่อนหน้า
      </button>

      {currentStep < 3 ? (
        <button
          type="button"
          onClick={onNextStep}
          className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
        >
          ถัดไป
          <ChevronRight size={20} className="ml-1" />
        </button>
      ) : (
        <button
          type="button"
          onClick={onSubmit}
          className="flex items-center px-6 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition-colors"
        >
          <Check size={20} className="mr-2" />
          ส่งข้อมูล
        </button>
      )}
    </div>
  );
}
