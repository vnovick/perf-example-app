// import {createStore, applyMiddleware, combineReducers, Store} from 'redux';
// import thunk from 'redux-thunk';
// import reduxSetupReducer from './reduxSetupReducer';

// // Root reducer combining all reducers (in this case, only one)
// const rootReducer = combineReducers({
//   reduxSetup: reduxSetupReducer,
// });

// const middlewares = [thunk];

// //Adding flipper debugger plugin
// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }

// // Create store with middleware
// const reduxSetupStore: Store = createStore(
//   rootReducer,
//   applyMiddleware(...middlewares),
// );

// export type RootState = ReturnType<typeof rootReducer>;

// export default reduxSetupStore;

/*  ---------------------------------------------------------------------------------------------------------
--------------------------------------------------------RTK Setup--------------------------------------------
    ---------------------------------------------------------------------------------------------------------
*/

import {configureStore} from '@reduxjs/toolkit';
import reduxSetupReducer from './reduxSetupSlice';
const createDebugger = require('redux-flipper').default;
import reactotron from '../../../ReactotronConfig';

const reduxSetupStore = configureStore({
  reducer: {
    reduxSetup: reduxSetupReducer,
  },
  enhancers: [reactotron.createEnhancer!()],
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware({serializableCheck: false}).concat(
          createDebugger(),
        )
      : getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof reduxSetupStore.getState>;

export default reduxSetupStore;
