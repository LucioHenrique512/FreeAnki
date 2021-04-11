import {combineReducers} from 'redux';

export interface ActionType {
  type: string;
  payload: any;
}

import {onboarding} from './onboarding';

const reducers = {onboarding};

export type StoreType = typeof reducers;

export default combineReducers(reducers);
