import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DefaultApiError, GoogleAuthType, SignInResponse } from 'src/common';
import { initialRequestState, RequestState } from 'src/core';

const initialState: RequestState<SignInResponse> =
  initialRequestState<SignInResponse>();

const googleAuthSlice = createSlice({
  name: 'googleAuth',
  initialState,
  reducers: {
    googleAuthRequest(state, _action: PayloadAction<GoogleAuthType>) {
      state.load = true;
      state.error = undefined;
      state.request = undefined;
    },
    googleAuthSuccess(state, action: PayloadAction<SignInResponse>) {
      state.load = false;
      state.request = action.payload;
      state.error = undefined;
    },
    googleAuthError(state, action: PayloadAction<DefaultApiError>) {
      state.load = false;
      state.error = action.payload;
    },
    clearGoogleAuthState(_state) {
      return initialRequestState<SignInResponse>();
    },
  },
});

export const {
  googleAuthRequest,
  googleAuthSuccess,
  googleAuthError,
  clearGoogleAuthState,
} = googleAuthSlice.actions;

export default googleAuthSlice.reducer;
