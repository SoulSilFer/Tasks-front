/// src\core\redux\sagas\index.ts

import { all } from 'redux-saga/effects';

import { rootAuthSaga, rootSignUpSaga } from './auth';

export function* watcherSaga() {
  yield all([rootAuthSaga(), rootSignUpSaga()]);
}
