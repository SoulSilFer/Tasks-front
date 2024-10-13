// src/core/redux/slices/auth/auth-slice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DefaultApiError, SignInResponse, SignInType } from 'src/common';
import { initialRequestState, RequestState } from 'src/core';

interface AuthState {
  signIn: RequestState<SignInResponse>;
  refreshToken: boolean;
  refreshTokenError: DefaultApiError | undefined;
  refreshTokenLoad: boolean;
}

const initialState: AuthState = {
  signIn: initialRequestState<SignInResponse>(),
  refreshToken: false,
  refreshTokenError: undefined,
  refreshTokenLoad: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInRequest(state, _action: PayloadAction<SignInType>) {
      state.signIn.load = true;
      state.signIn.error = undefined;
      state.signIn.request = undefined;
    },
    signInSuccess(state, action: PayloadAction<SignInResponse>) {
      state.signIn.load = false;
      state.signIn.request = action.payload;
      state.signIn.error = undefined;
    },
    signInError(state, action: PayloadAction<DefaultApiError>) {
      state.signIn.load = false;
      state.signIn.error = action.payload;
    },
    clearSignInState(state) {
      state.signIn = initialRequestState<SignInResponse>();
    },
    onLogout(state) {
      state.signIn.request = undefined;
      state.signIn.error = undefined;
      state.signIn.load = false;
    },
    onStartRefreshTokenPooling() {},
    onRefreshTokenPoolingHasStart(state, action: PayloadAction<boolean>) {
      state.refreshToken = action.payload;
      state.refreshTokenError = undefined;
    },
    onRefreshTokenPoolingStop(state) {
      state.refreshToken = false;
    },
    onRefreshTokenPoolingLoad(state, action: PayloadAction<boolean>) {
      state.refreshTokenLoad = action.payload;
    },
    onRefreshTokenError(state, action: PayloadAction<DefaultApiError>) {
      state.refreshTokenError = action.payload;
      state.refreshTokenLoad = false;
    },
  },
});

export const {
  signInRequest,
  signInSuccess,
  signInError,
  clearSignInState,
  onLogout,
  onStartRefreshTokenPooling,
  onRefreshTokenPoolingHasStart,
  onRefreshTokenPoolingStop,
  onRefreshTokenPoolingLoad,
  onRefreshTokenError,
} = authSlice.actions;

export default authSlice.reducer;
