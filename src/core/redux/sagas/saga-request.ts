/// src\core\redux\sagas\saga-request.ts

/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpStatusCode } from 'axios';
import { put } from 'redux-saga/effects';

import { HttpResponse } from 'src/core';

interface OptionsType<P> {
  request: (payload: P) => any;
  onError: (error: string | object | any) => any;
  onSuccess: (data: any) => any;
}

interface IActionCreator<P> {
  type: string;
  payload: P;
}

export function createSagaRequest<A>(options: OptionsType<A>) {
  return function* (action: IActionCreator<A>) {
    try {
      const { payload } = action;
      const { statusCode, body }: HttpResponse = yield options.request(payload);

      if (
        [
          HttpStatusCode.Ok,
          HttpStatusCode.Created,
          HttpStatusCode.NoContent,
        ].includes(statusCode)
      ) {
        yield put(options.onSuccess(body));
      } else {
        yield put(options.onError(body));
      }
    } catch (error) {
      yield put(options.onError(error));
    }
  };
}
