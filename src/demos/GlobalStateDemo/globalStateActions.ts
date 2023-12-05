// Action Types
export const LOAD_BLOATED_STATE = 'LOAD_BLOATED_STATE';
export const LOAD_OPTIMIZED_STATE = 'LOAD_OPTIMIZED_STATE';

// TypeScript interfaces for the action types
interface LoadBloatedStateAction {
  type: typeof LOAD_BLOATED_STATE;
}

interface LoadOptimizedStateAction {
  type: typeof LOAD_OPTIMIZED_STATE;
}

// Using TypeScript Union Type for the actions
export type GlobalStateActionTypes =
  | LoadBloatedStateAction
  | LoadOptimizedStateAction;

// Action Creators
export const loadBloatedState = (): GlobalStateActionTypes => {
  return {
    type: LOAD_BLOATED_STATE,
  };
};

export const loadOptimizedState = (): GlobalStateActionTypes => {
  return {
    type: LOAD_OPTIMIZED_STATE,
  };
};
