// src/core/redux/sagas/auth/auth-saga.ts

import { all, takeLatest } from 'redux-saga/effects';

import {
  API_ROUTES,
  ApiClient,
  AuthController,
  makeApiUrl,
  refreshTokenError,
  refreshTokenRequest,
  refreshTokenSuccess,
} from 'src/core';
import { createSagaRequest } from '../saga-request';

const client = new ApiClient();
const authController = new AuthController(
  makeApiUrl(API_ROUTES.REFRESH),
  client
);

export function* rootRefreshTokenSaga() {
  yield all([
    takeLatest(
      refreshTokenRequest.type,
      createSagaRequest({
        request: async () => await authController.refresh(),
        onError: refreshTokenError,
        onSuccess: refreshTokenSuccess,
      })
    ),
  ]);
}
