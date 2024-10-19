// src/core/redux/sagas/auth/auth-saga.ts

import { all, takeLatest } from 'redux-saga/effects';

import { SignInType } from 'src/common';
import {
  API_ROUTES,
  ApiClient,
  AuthController,
  makeApiUrl,
  signInError,
  signInRequest,
  signInSuccess,
} from 'src/core';
import { createSagaRequest } from '../saga-request';

const client = new ApiClient();
const authController = new AuthController(makeApiUrl(API_ROUTES.LOGIN), client);

export function* rootAuthSaga() {
  yield all([
    takeLatest(
      signInRequest.type,
      createSagaRequest<SignInType>({
        request: async (params) => await authController.auth(params),
        onError: signInError,
        onSuccess: signInSuccess,
      })
    ),
  ]);
}
