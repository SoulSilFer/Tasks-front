// src/core/redux/sagas/auth/refresh-token-saga.ts

/* eslint-disable @typescript-eslint/no-explicit-any */

import { HttpStatusCode } from 'axios';
import { call, delay, put, race, take } from 'redux-saga/effects';
import { SignInResponse, STORAGE_KEYS } from 'src/common';
import {
  API_ROUTES,
  ApiClient,
  AuthController,
  HttpResponse,
  makeApiUrl,
  onLogout,
  onRefreshTokenPoolingHasStart,
  onRefreshTokenPoolingStop,
  onStartRefreshTokenPooling,
  SessionStorage,
} from 'src/core';

function* refreshTokenPoolTask(): any {
  while (true) {
    try {
      console.log('caiu aqui');
      // Fazendo a chamada para atualizar o token
      const authController = new AuthController(
        makeApiUrl(API_ROUTES.REFRESH),
        new ApiClient()
      );
      const { statusCode, body }: HttpResponse<SignInResponse> = yield call([
        authController,
        authController.refresh,
      ]);

      if (body && statusCode === HttpStatusCode.Created) {
        yield put(onRefreshTokenPoolingHasStart(true));

        // Atualiza o token no session storage
        const session = new SessionStorage();
        yield session.set(STORAGE_KEYS.TOKEN, body);

        // Espera 10 minutos antes de atualizar o token novamente
        yield delay(600000);
      } else {
        throw new Error('Invalid token');
      }
    } catch (error) {
      console.error('Token refresh failed', error);

      // Remove o token e desloga o usuário
      const session = new SessionStorage();
      yield session.delete(STORAGE_KEYS.TOKEN);

      yield put(onLogout());
      yield put(onRefreshTokenPoolingStop());
    }
  }
}

export function* pollRefreshTokenTaskWatcher(): any {
  while (true) {
    yield take(onStartRefreshTokenPooling.type);
    yield put(onRefreshTokenPoolingHasStart(true));

    yield race([
      call(refreshTokenPoolTask),
      take(onRefreshTokenPoolingStop.type),
    ]);
  }
}
