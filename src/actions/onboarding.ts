export const onboardingTypes = {
  ONBOARDING_CHANGE_STEP: 'ONBOARDING_CHANGE_STEP',
};

export const changeStep = (payload: 'GREETINGS' | 'SIGNUP' | 'SIGNIN') => ({
  type: onboardingTypes.ONBOARDING_CHANGE_STEP,
  payload,
});
