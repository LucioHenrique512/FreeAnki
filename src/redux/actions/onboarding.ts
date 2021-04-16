export const onboardingTypes = {
  ONBOARDING_CHANGE_STEP: 'ONBOARDING_CHANGE_STEP',
};

export const changeStep = (payload: any) => ({
  type: onboardingTypes.ONBOARDING_CHANGE_STEP,
  payload,
});
