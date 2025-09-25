import { Check, CreditCard, MapPin, User } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  completedSteps: Set<number>;
}

export default function ProgressBar({
  currentStep,
  completedSteps,
}: ProgressBarProps) {
  const steps = [
    { number: 1, title: "ข้อมูลส่วนตัว", icon: User },
    { number: 2, title: "ที่อยู่", icon: MapPin },
    { number: 3, title: "การชำระเงิน", icon: CreditCard },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        {steps.map((step) => {
          const Icon = step.icon;
          const isCompleted = completedSteps.has(step.number);
          const isCurrent = currentStep === step.number;

          return (
            <div key={step.number} className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-colors ${
                  isCompleted
                    ? "bg-green-500 text-white"
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
          style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}
