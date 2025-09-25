import { steps } from "../constants/form.constants";

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
    <div className="flex justify-between gap-3">
      <button
        type="button"
        onClick={onPrevStep}
        disabled={currentStep === 0}
        className="px-4 py-2 rounded border disabled:opacity-50"
      >
        ย้อนกลับ
      </button>

      <div className="flex gap-2">
        {!isLast && (
          <button
            type="button"
            onClick={onNextStep}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            ถัดไป
          </button>
        )}

        {isLast && (
          <button
            type="submit"
            className="px-4 py-2 rounded bg-green-600 text-white"
          >
            ส่งข้อมูล
          </button>
        )}
      </div>
    </div>
  );
}
