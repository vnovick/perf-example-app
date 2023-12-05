import {RootState} from './globalStateStore'; // Import the RootState type

// Selector for bloated data
export const selectBloatedData = (state: RootState) => state.global.bloatedData;

// Selector for optimized data
export const selectOptimizedData = (state: RootState) =>
  state.global.optimizedData;
