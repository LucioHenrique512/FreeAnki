import {ActionType} from '.';
import {onboardingActions} from '../actions';
const {ONBOARDING_CHANGE_STEP} = onboardingActions.onboardingTypes;

const INIT_STATE = {
  currentStep: null,
};

export type OnboardingStateType = typeof INIT_STATE;

export const onboarding = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    case ONBOARDING_CHANGE_STEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};
