/// src\core\redux\sagas\task\get-task-by-date-saga.ts

import { all, takeLatest } from 'redux-saga/effects';

import { GetTaskByDateType } from 'src/common';
import {
  API_ROUTES,
  ApiClient,
  TaskController,
  getTaskByDateError,
  getTaskByDateRequest,
  getTaskByDateSuccess,
  makeApiUrl,
} from 'src/core';
import { createSagaRequest } from '../saga-request';

const client = new ApiClient();
const taskController = new TaskController(
  makeApiUrl(API_ROUTES.GET_TASK_BY_DATE),
  client
);

export function* rootGetTaskByDateSaga() {
  yield all([
    takeLatest(
      getTaskByDateRequest.type,
      createSagaRequest<GetTaskByDateType>({
        request: async (params) => await taskController.getTaskByDate(params),
        onError: getTaskByDateError,
        onSuccess: getTaskByDateSuccess,
      })
    ),
  ]);
}
