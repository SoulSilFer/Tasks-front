/// src\core\redux\sagas\user\get-by-id-saga.ts

import { all, takeLatest } from 'redux-saga/effects';

import {
  API_ROUTES,
  ApiClient,
  UserController,
  getUserByIdError,
  getUserByIdRequest,
  getUserByIdSuccess,
  makeApiUrl,
} from 'src/core';
import { createSagaRequest } from '../saga-request';

const client = new ApiClient();
const userController = new UserController(
  makeApiUrl(API_ROUTES.GET_USER_BY_ID),
  client
);

export function* rootGetUserByIdSaga() {
  yield all([
    takeLatest(
      getUserByIdRequest.type,
      createSagaRequest({
        request: async () => await userController.getUserById(),
        onError: getUserByIdError,
        onSuccess: getUserByIdSuccess,
      })
    ),
  ]);
}
