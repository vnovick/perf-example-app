import {configureStore} from '@reduxjs/toolkit';
import complexSlice from './complexSlice';
const createDebugger = require('redux-flipper').default;
const complexStateStore = configureStore({
  reducer: {
    complexData: complexSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware({serializableCheck: false}).concat(
          createDebugger(),
        )
      : getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof complexStateStore.getState>;
export default complexStateStore;
