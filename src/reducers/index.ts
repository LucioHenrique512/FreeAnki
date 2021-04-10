import {combineReducers} from 'redux';

export interface ActionType {
  type: string;
  payload: any;
}

import {onboarding} from './onboarding';

export default combineReducers({onboarding});
