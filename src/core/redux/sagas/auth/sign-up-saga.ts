// src/core/redux/sagas/auth/sign-up-saga.ts

import { all, fork, takeLatest } from 'redux-saga/effects';

import { SignUpType } from 'src/common';
import {
  API_ROUTES,
  ApiClient,
  AuthController,
  makeApiUrl,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from 'src/core';
import { createSagaRequest } from '../saga-request';
import { pollRefreshTokenTaskWatcher } from './refresh-token-saga';

const client = new ApiClient();
const authController = new AuthController(
  makeApiUrl(API_ROUTES.SIGNUP),
  client
);

export function* rootSignUpSaga() {
  yield all([
    takeLatest(
      signUpRequest.type,
      createSagaRequest<SignUpType>({
        request: async (params) => await authController.signUp(params),
        onError: signUpError,
        onSuccess: signUpSuccess,
      })
    ),
    fork(pollRefreshTokenTaskWatcher),
  ]);
}
