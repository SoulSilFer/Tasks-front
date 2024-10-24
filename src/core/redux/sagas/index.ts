/// src\core\redux\sagas\index.ts

import { all } from 'redux-saga/effects';

import {
  rootAuthSaga,
  rootGoogleAuthSaga,
  rootRefreshTokenSaga,
  rootSignUpSaga,
} from './auth';
import { rootGetUserByIdSaga } from './user';

export function* watcherSaga() {
  yield all([
    rootAuthSaga(),
    rootSignUpSaga(),
    rootRefreshTokenSaga(),
    rootGetUserByIdSaga(),
    rootGoogleAuthSaga(),
  ]);
}
