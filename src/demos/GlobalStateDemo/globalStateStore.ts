import {createStore, applyMiddleware, combineReducers, Store} from 'redux';
import thunk from 'redux-thunk';
import globalStateReducer from './globalStateReducer';

// Root reducer combining all reducers (in this case, only one)
const rootReducer = combineReducers({
  global: globalStateReducer,
});

const middlewares = [thunk];

//Adding flipper debugger plugin
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

// Create store with middleware
const globalStateStore: Store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

export type RootState = ReturnType<typeof rootReducer>;

export default globalStateStore;

// import {configureStore} from '@reduxjs/toolkit';
// import globalStateReducer from './globalStateReducer';
// const createDebugger = require('redux-flipper').default;

// const globalStateStore = configureStore({
//   reducer: {
//     global: globalStateReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     __DEV__
//       ? getDefaultMiddleware({serializableCheck: false}).concat(
//           createDebugger(),
//         )
//       : getDefaultMiddleware({
//           serializableCheck: false,
//         }),
// });

// export default globalStateStore;
