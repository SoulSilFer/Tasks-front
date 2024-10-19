// src/core/redux/slices/auth/refresh-token-slice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DefaultApiError, SignInResponse } from 'src/common';
import { initialRequestState, RequestState } from 'src/core';

const initialState: RequestState<SignInResponse> =
  initialRequestState<SignInResponse>();

const refreshTokenSlice = createSlice({
  name: 'refreshToken',
  initialState,
  reducers: {
    refreshTokenRequest(state) {
      state.load = true;
      state.error = undefined;
      state.request = undefined;
    },
    refreshTokenSuccess(state, action: PayloadAction<SignInResponse>) {
      state.load = false;
      state.request = action.payload;
      state.error = undefined;
    },
    refreshTokenError(state, action: PayloadAction<DefaultApiError>) {
      state.load = false;
      state.error = action.payload;
    },
    clearRefreshTokenState(_state) {
      return initialRequestState<SignInResponse>();
    },
  },
});

export const {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenError,
  clearRefreshTokenState,
} = refreshTokenSlice.actions;

export default refreshTokenSlice.reducer;
