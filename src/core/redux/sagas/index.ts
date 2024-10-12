/// src\core\redux\sagas\index.ts

import { all } from 'redux-saga/effects';

import { rootAuthSaga } from './auth/auth-saga';

export function* watcherSaga() {
  yield all([rootAuthSaga()]);
}
