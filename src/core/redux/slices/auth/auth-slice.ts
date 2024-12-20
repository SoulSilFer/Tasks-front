// src/core/redux/slices/auth/auth-slice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DefaultApiError, SignInResponse, SignInType } from 'src/common';
import { initialRequestState, RequestState } from 'src/core';

const initialState: RequestState<SignInResponse> =
  initialRequestState<SignInResponse>();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInRequest(state, _action: PayloadAction<SignInType>) {
      state.load = true;
      state.error = undefined;
      state.request = undefined;
    },
    signInSuccess(state, action: PayloadAction<SignInResponse>) {
      state.load = false;
      state.request = action.payload;
      state.error = undefined;
    },
    signInError(state, action: PayloadAction<DefaultApiError>) {
      state.load = false;
      state.error = action.payload;
    },
    clearSignInState(_state) {
      return initialRequestState<SignInResponse>();
    },
  },
});

export const { signInRequest, signInSuccess, signInError, clearSignInState } =
  authSlice.actions;

export default authSlice.reducer;
