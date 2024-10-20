/// src\core\redux\slices\user\get-by-id-slice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DefaultApiError, GetUserByIdResponse } from 'src/common';
import { initialRequestState, RequestState } from 'src/core';

const initialState: RequestState<GetUserByIdResponse> =
  initialRequestState<GetUserByIdResponse>();

const getUserByIdSlice = createSlice({
  name: 'getUserById',
  initialState,
  reducers: {
    getUserByIdRequest(state) {
      state.load = true;
      state.error = undefined;
      state.request = undefined;
    },
    getUserByIdSuccess(state, action: PayloadAction<GetUserByIdResponse>) {
      state.load = false;
      state.request = action.payload;
      state.error = undefined;
    },
    getUserByIdError(state, action: PayloadAction<DefaultApiError>) {
      state.load = false;
      state.error = action.payload;
    },
    clearGetUserByIdState(_state) {
      return initialRequestState<GetUserByIdResponse>();
    },
  },
});

export const {
  getUserByIdRequest,
  getUserByIdSuccess,
  getUserByIdError,
  clearGetUserByIdState,
} = getUserByIdSlice.actions;

export default getUserByIdSlice.reducer;
