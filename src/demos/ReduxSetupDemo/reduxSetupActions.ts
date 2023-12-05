// Action Types
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

// TypeScript interfaces for the action types
interface IncrementCounterAction {
  type: typeof INCREMENT_COUNTER;
}

interface DecrementCounterAction {
  type: typeof DECREMENT_COUNTER;
}

// Using TypeScript Union Type for the actions
export type CounterActionTypes =
  | IncrementCounterAction
  | DecrementCounterAction;

// Action Creators
export const incrementCounter = (): CounterActionTypes => {
  return {
    type: INCREMENT_COUNTER,
  };
};

export const decrementCounter = (): CounterActionTypes => {
  return {
    type: DECREMENT_COUNTER,
  };
};
