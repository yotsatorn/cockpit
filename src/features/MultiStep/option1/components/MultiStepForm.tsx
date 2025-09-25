import type { MultiFormValues } from "../types/form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { fullSchema } from "../schemas/form.schema";
import { steps } from "../constants/form.constants";
import NavigationButtons from "./NavigationButtons";
import ProgressBar from "./ProgressBar";

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const methods = useForm<MultiFormValues>({
    resolver: zodResolver(fullSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      address1: "",
      city: "",
      postal: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<MultiFormValues> = (data) => {
    // ตัวอย่าง: ส่งข้อมูลไป API หรือทำอะไรต่อ
    // ที่นี่เราทำเป็น console.log เพื่อให้เห็นผล
    console.log("ส่งข้อมูลสำเร็จ: ", data);
    alert("ส่งข้อมูลสำเร็จ — ดู console.log");
    // ถ้าต้องการ reset: methods.reset()
  };

  // go next: validate current fields only
  const nextStep = async () => {
    const currentFieldNames = Object.keys(steps[step].schema.shape) as (keyof MultiFormValues)[];
    const valid = await methods.trigger(currentFieldNames);
    // if (valid) setStep((s) => s + 1);
    if (valid) {
      setCompletedSteps(prev => new Set([...prev, step]));
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => setStep((s) => Math.max(0, s - 1));

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      <ProgressBar currentStep={step} completedSteps={completedSteps}/>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
          <div className="mb-6">{steps[step].component}</div>

          <NavigationButtons
            currentStep={step}
            onPrevStep={prevStep}
            onNextStep={nextStep}
          />
        </form>
      </FormProvider>
    </div>
  );
}
