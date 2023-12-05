import {
  Action,
  createStore,
  applyMiddleware,
  combineReducers,
  Store,
} from 'redux';
import thunk, {ThunkAction, ThunkMiddleware} from 'redux-thunk';
import {LegacyState, LegacyReducer} from './reducers/legacyReducer';

export interface AppState {
  legacyReducer: LegacyState;
}

const rootReducer = combineReducers<AppState>({
  legacyReducer: LegacyReducer,
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

const store: Store<AppState, any> & {
  dispatch: AppThunk;
} = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, any>),
);

export default store;
