/// src/core/redux/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducer, watcherSaga } from 'src/core';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
