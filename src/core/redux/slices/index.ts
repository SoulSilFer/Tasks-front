/// src\core\redux\slices\index.ts

import { combineReducers } from 'redux';

import authReducer from '../slices/auth/auth-slice';

export * from './auth';

export const rootReducer = combineReducers({
  auth: authReducer,
});
