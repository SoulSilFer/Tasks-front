/// src\core\redux\slices\index.ts

import { combineReducers } from 'redux';

import authReducer from '../slices/auth/auth-slice';
import signUpReducer from '../slices/auth/sign-up-slice';

export * from './auth';

export const rootReducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
});
