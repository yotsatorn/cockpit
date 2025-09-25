import { CheckCircle2 } from "lucide-react";
import { steps } from "../constants/steps.constants";

interface ProgressBarProps {
  currentStep: number;
  completedSteps: Set<number>;
}

export default function ProgressBar({
  currentStep,
  completedSteps,
}: ProgressBarProps) {
  const CurrentIcon = steps[currentStep].icon;
  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          การตรวจสอบรถยนต์
        </h2>
        <div className="text-sm text-gray-600">
          ขั้นตอน {currentStep + 1} จาก {steps.length}
        </div>
      </div>

      {/* Progress Bar - แสดงเปอร์เซ็นต์ความคืบหน้า */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>ความคืบหน้า</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Desktop: Steps แบบ Horizontal Scrollable */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between overflow-x-auto pb-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.has(index);
            const isCurrent = currentStep === index;
            return (
              <div key={step.id} className="flex items-center flex-shrink-0">
                <div className="flex flex-col items-center text-center min-w-[120px]">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-bold mb-2 ${
                      isCompleted
                        ? "bg-green-500 border-green-500 text-white"
                        : isCurrent
                        ? "bg-blue-600 border-blue-600 text-white"
                        : "bg-gray-100 border-gray-300 text-gray-500"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <Icon size={16} />
                    )}
                  </div>
                  <span
                    className={`text-xs font-medium leading-tight ${
                      isCurrent
                        ? "text-blue-600"
                        : isCompleted
                        ? "text-green-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.shortTitle}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 min-w-[40px] mx-4">
                    <div
                      className={`h-1 rounded ${
                        isCompleted ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tablet: Grid Layout */}
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-4 gap-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.has(index);
            const isCurrent = currentStep === index;
            return (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-bold mb-1 ${
                    isCompleted
                      ? "bg-green-500 border-green-500 text-white"
                      : isCurrent
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-gray-100 border-gray-300 text-gray-500"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    <Icon size={12} />
                  )}
                </div>
                <span
                  className={`text-xs font-medium leading-tight ${
                    isCurrent
                      ? "text-blue-600"
                      : isCompleted
                      ? "text-green-600"
                      : "text-gray-500"
                  }`}
                >
                  {step.shortTitle}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: Current Step Only */}
      <div className="md:hidden">
        <div className="flex items-center justify-center space-x-2 mb-3">
          {steps.map((step, index) => {
            const isCompleted = completedSteps.has(index);
            const isCurrent = currentStep === index;
            return (
              <div
                key={step.id}
                className={`w-2 h-2 rounded-full ${
                  isCompleted
                    ? "bg-green-500"
                    : isCurrent
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              />
            );
          })}
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                completedSteps.has(currentStep)
                  ? "bg-green-500 border-green-500 text-white"
                  : "bg-blue-600 border-blue-600 text-white"
              }`}
            >
              {completedSteps.has(currentStep) ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <CurrentIcon size={16} />
              )}
            </div>
          </div>
          <div className="text-base font-semibold text-blue-600">
            {steps[currentStep]?.title}
          </div>
        </div>
      </div>
    </div>
  );
}
