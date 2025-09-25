import { Check } from "lucide-react";
import { steps } from "../constants/form.constants";

interface ProgressBarProps {
  currentStep: number;
  completedSteps: Set<number>;
}

export default function ProgressBar({
  currentStep,
  completedSteps,
}: ProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = completedSteps.has(index);
          const isCurrent = currentStep === index;

          return (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                  isCompleted
                    ? `bg-green-500 text-white ${isCurrent && "border-4 border-green-700"}`
                    : isCurrent
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {isCompleted ? <Check size={20} /> : <Icon size={20} />}
              </div>
              <span
                className={`text-sm font-medium ${
                  isCurrent
                    ? "text-blue-600"
                    : isCompleted
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
