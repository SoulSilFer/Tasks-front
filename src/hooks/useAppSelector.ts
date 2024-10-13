import { useSelector } from 'react-redux';

import { RootState } from 'src/core';

export function useAppSelector<S>(selector: (state: RootState) => S): S {
  return useSelector<RootState, S>(selector);
}
