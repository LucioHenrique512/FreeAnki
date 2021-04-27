import {ActionType} from '.';
import {SessionActions} from '../actions/session';

const INIT_STATE = {
  user: null,
  isAuthenticed: false,
};

export type SessionStateType = typeof INIT_STATE;

export const session = (state = INIT_STATE, action: ActionType) => {
  switch (action.type) {
    case SessionActions.SESSION_LOGIN_USER:
      return {
        ...state,
        isAuthenticed: true,
      };
    case SessionActions.SESSION_LOGOUT_USER:
      return {
        ...state,
        isAuthenticed: false,
      };
    default:
      return state;
  }
};
