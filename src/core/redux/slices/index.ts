/// src\core\redux\slices\index.ts

import { combineReducers } from 'redux';

import authReducer from '../slices/auth/auth-slice';
import googleAuthReducer from '../slices/auth/google-auth-slice';
import refreshTokenReducer from '../slices/auth/refresh-token-slice';
import signUpReducer from '../slices/auth/sign-up-slice';

import getUserByIdReducer from '../slices/user/get-by-id-slice';

import getTaskByDateReducer from '../slices/task/get-task-by-date-slice';

export * from './auth';
export * from './task';
export * from './user';

export const rootReducer = combineReducers({
  auth: authReducer,
  signUp: signUpReducer,
  refreshToken: refreshTokenReducer,
  getUserById: getUserByIdReducer,
  googleAuth: googleAuthReducer,
  getTaskByDate: getTaskByDateReducer,
});
