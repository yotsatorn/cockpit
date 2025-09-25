"use client";

import type { MultiFormValues } from "../types/form.types";
import { Form } from "@/shared/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { fullSchema } from "../schemas/form.schema";
import { INITIAL_FORM_VALUES } from "../constants/form.constants";
import { useState } from "react";
import { steps } from "../constants/steps.constants";
import ProgressBar from "./ProgressBar";
import NavigationButtons from "./NavigationButtons";

export default function VehicleInspectionForm() {
  const [step, setStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const form = useForm({
    resolver: zodResolver(fullSchema),
    mode: "all",
    defaultValues: INITIAL_FORM_VALUES,
  });

  const nextStep = async () => {
    const currentFieldNames = Object.keys(steps[step].schema.shape) as (keyof MultiFormValues)[];
    const valid = await form.trigger(currentFieldNames);
    if (valid) {
      setCompletedSteps((prev) => new Set([...prev, step]));
      setStep((s) => s + 1);
    }
  };

  const prevStep = () => setStep((s) => Math.max(0, s - 1));

  const onSubmit: SubmitHandler<MultiFormValues> = (data) => {
    console.log("ข้อมูล data: ", data);
    alert("ส่งข้อมูลสำเร็จ — ดู console.log");
  };

  const Components = steps[step].component;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <ProgressBar currentStep={step} completedSteps={completedSteps} />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <div className="mb-6">
            <Components />
          </div>

          <NavigationButtons
            currentStep={step}
            onPrevStep={prevStep}
            onNextStep={nextStep}
          />
        </form>
      </Form>
    </div>
  );
}
