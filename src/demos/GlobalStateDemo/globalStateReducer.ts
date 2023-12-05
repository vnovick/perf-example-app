import {
  LOAD_BLOATED_STATE,
  LOAD_OPTIMIZED_STATE,
  GlobalStateActionTypes,
} from './globalStateActions';

// Define the shape of the state
interface GlobalState {
  bloatedData: any; // Simulated bloated data
  optimizedData: string[]; // Simulated optimized data
}

// Initial state
const initialState: GlobalState = {
  bloatedData: null,
  optimizedData: [],
};

// Define a type that allows dynamic keys
export type BloatedDataType = {
  [key: string]: {nestedKey: string}[];
};

// Function to generate bloated data
const generateBloatedData = () => {
  let data: BloatedDataType = {};
  for (let i = 0; i < 10000; i++) {
    data[`key${i}`] = Array(100).fill({nestedKey: 'Nested Data' + i});
  }
  return data;
};

// Function to transform bloated data into optimized format
const generateOptimizedData = (bloatedData: BloatedDataType): string[] => {
  // Example: Flatten the deeply nested structure into a simple array of strings
  return bloatedData
    ? Object.keys(bloatedData).map(
        key => `${key}: ${bloatedData[key].length} items`,
      )
    : [];
};

// Reducer function
const globalStateReducer = (
  state = initialState,
  action: GlobalStateActionTypes,
): GlobalState => {
  switch (action.type) {
    case LOAD_BLOATED_STATE:
      return {
        ...state,
        bloatedData: generateBloatedData(), // Generating bloated data
        optimizedData: [],
      };
    case LOAD_OPTIMIZED_STATE:
      return {
        ...state,
        bloatedData: null,
        optimizedData: generateOptimizedData(state.bloatedData), // Example of optimized data
      };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof globalStateReducer>;

export default globalStateReducer;
