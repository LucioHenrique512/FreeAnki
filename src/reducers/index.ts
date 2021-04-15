import {combineReducers} from 'redux';

export interface ActionType {
  type: string;
  payload: any;
}

import {onboarding} from './onboarding';
import {session} from './session';

const reducers = {onboarding, session};

export type StoreType = typeof reducers;

export default combineReducers(reducers);
