import {ActionType} from '.';

const INIT_STATE = {
  step: '',
};

export const onboarding = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    default:
      return state;
  }
};
