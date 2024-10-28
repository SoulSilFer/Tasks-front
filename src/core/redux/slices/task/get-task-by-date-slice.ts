/// src\core\redux\slices\task\get-task-by-date-slice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  DefaultApiError,
  GetTaskByDateResponse,
  GetTaskByDateType,
} from 'src/common';
import { initialRequestState, RequestState } from 'src/core';

const initialState: RequestState<GetTaskByDateResponse> =
  initialRequestState<GetTaskByDateResponse>();

const getTaskByDateSlice = createSlice({
  name: 'getTaskByDate',
  initialState,
  reducers: {
    getTaskByDateRequest(state, _action: PayloadAction<GetTaskByDateType>) {
      state.load = true;
      state.error = undefined;
      state.request = undefined;
    },
    getTaskByDateSuccess(state, action: PayloadAction<GetTaskByDateResponse>) {
      state.load = false;
      state.request = action.payload;
      state.error = undefined;
    },
    getTaskByDateError(state, action: PayloadAction<DefaultApiError>) {
      state.load = false;
      state.error = action.payload;
    },
    clearGetTaskByDateState(_state) {
      return initialRequestState<GetTaskByDateResponse>();
    },
  },
});

export const {
  getTaskByDateRequest,
  getTaskByDateSuccess,
  getTaskByDateError,
  clearGetTaskByDateState,
} = getTaskByDateSlice.actions;

export default getTaskByDateSlice.reducer;
