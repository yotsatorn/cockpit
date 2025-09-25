import type { VehicleInspectionData } from "../types/step.types";
import { useState, type JSX } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { fullSchema } from "../schemas/step.schema";
import PersonalInfoStep from "./PersonalInfoStep";
import AddressStep from "./AddressStep";
import PaymentStep from "./PaymentStep";
// import ProgressBar from "./ProgressBar";
import NavigationButtons from "./NavigationButtons";

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<number>(1);
//   const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const form = useForm({
    resolver: zodResolver(fullSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
    }
  }); 

  const { control, handleSubmit, trigger, formState: { errors } } = form;

  // ตรวจสอบ validation สำหรับแต่ละ step
  const validateStep = async (step: number): Promise<boolean> => {
    let fieldsToValidate: (keyof VehicleInspectionData)[] = [];
    
    switch (step) {
      case 1:
        fieldsToValidate = ['firstName', 'lastName', 'email', 'phone'];
        break;
      case 2:
        fieldsToValidate = ['address', 'city', 'postalCode'];
        break;
      case 3:
        fieldsToValidate = ['cardNumber', 'expiryDate', 'cvv', 'cardholderName'];
        break;
    }
    
    const result = await trigger(fieldsToValidate);
    return result;
  };

  const nextStep = async (): Promise<void> => {
    const isStepValid = await validateStep(currentStep);
    
    if (isStepValid) {
    //   setCompletedSteps(prev => new Set([...prev, currentStep]));
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = (): void => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const onSubmit = (data: VehicleInspectionData): void => {
    console.log('Form Data:', data);
    alert('Form submitted successfully! ✅');
  };

  const renderCurrentStep = (): JSX.Element => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep control={control} errors={errors} />;
      case 2:
        return <AddressStep control={control} errors={errors} />;
      case 3:
        return <PaymentStep control={control} errors={errors} />;
      default:
        return <PersonalInfoStep control={control} errors={errors} />;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white">
      {/* <ProgressBar currentStep={currentStep} completedSteps={completedSteps} /> */}
      
      <div>
        {renderCurrentStep()}
        
        <NavigationButtons
          currentStep={currentStep}
          onPrevStep={prevStep}
          onNextStep={nextStep}
          onSubmit={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  )
}
