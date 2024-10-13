// src/core/redux/slices/auth/sign-up-slice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DefaultApiError, SignUpResponse, SignUpType } from 'src/common';
import { initialRequestState, RequestState } from 'src/core';

const initialState: RequestState<SignUpResponse> = initialRequestState();

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    signUpRequest(state, _action: PayloadAction<SignUpType>) {
      state.load = true;
      state.error = undefined;
      state.request = undefined;
    },
    signUpSuccess(state, action: PayloadAction<SignUpResponse>) {
      state.load = false;
      state.request = action.payload;
      state.error = undefined;
    },
    signUpError(state, action: PayloadAction<DefaultApiError>) {
      state.load = false;
      state.error = action.payload;
    },
    clearSignUpState(_state) {
      return initialRequestState<SignUpResponse>();
    },
  },
});

export const { signUpRequest, signUpSuccess, signUpError, clearSignUpState } =
  signUpSlice.actions;

export default signUpSlice.reducer;
