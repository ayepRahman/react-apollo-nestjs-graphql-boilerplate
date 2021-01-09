import { makeVar } from '@apollo/client';

const initialStep = 0;

export interface CheckoutStepVarProps {
  currentStep: number;
}

export const checkoutStepsVar = makeVar<CheckoutStepVarProps>({
  currentStep: initialStep,
});
