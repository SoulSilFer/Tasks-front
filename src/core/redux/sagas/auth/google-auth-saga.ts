// src/core/redux/sagas/auth/auth-saga.ts

import { all, takeLatest } from 'redux-saga/effects';

import { GoogleAuthType } from 'src/common';
import {
  API_ROUTES,
  ApiClient,
  AuthController,
  googleAuthError,
  googleAuthRequest,
  googleAuthSuccess,
  makeApiUrl,
} from 'src/core';
import { createSagaRequest } from '../saga-request';

const client = new ApiClient();
const authController = new AuthController(
  makeApiUrl(API_ROUTES.AUTH_GOOGLE),
  client
);

export function* rootGoogleAuthSaga() {
  yield all([
    takeLatest(
      googleAuthRequest.type,
      createSagaRequest<GoogleAuthType>({
        request: async (params) => await authController.google(params),
        onError: googleAuthError,
        onSuccess: googleAuthSuccess,
      })
    ),
  ]);
}
