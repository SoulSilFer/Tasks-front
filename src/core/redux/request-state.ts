import { DefaultApiError } from 'src/common';

export interface RequestState<T> {
  request: T | undefined;
  load: boolean;
  error: DefaultApiError | undefined;
}

export const initialRequestState = <T>(): RequestState<T> => ({
  request: undefined,
  load: false,
  error: undefined,
});
