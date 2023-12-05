import {createSlice} from '@reduxjs/toolkit';

// Define the shape of the state
interface ReduxSetupState {
  counter: number;
}

// Initial state
const initialState: ReduxSetupState = {
  counter: 0,
};

const reduxSetupSlice = createSlice({
  name: 'reduxSetup',
  initialState,
  reducers: {
    incrementCounter: state => {
      state.counter += 1;
    },
    decrementCounter: state => {
      state.counter -= 1;
    },
    // You can add more reducers here if needed
  },
});

// Export the action creators
export const {incrementCounter, decrementCounter} = reduxSetupSlice.actions;

// Export the reducer
export default reduxSetupSlice.reducer;
