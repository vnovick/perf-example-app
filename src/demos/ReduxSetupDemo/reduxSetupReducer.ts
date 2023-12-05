import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  CounterActionTypes,
} from './reduxSetupActions';

// Define the shape of the state
interface ReduxSetup {
  counter: number;
}

// Initial state
const initialState: ReduxSetup = {
  counter: 0,
};

// Reducer function
const reduxSetupReducer = (
  state = initialState,
  action: CounterActionTypes,
): ReduxSetup => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default reduxSetupReducer;
