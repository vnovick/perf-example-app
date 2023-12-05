export interface LegacyState {
  // Define the type of Legacy state here
}

const initialState: LegacyState = {
  counter: {
    value: 0,
  },
};

export const LegacyReducer = (
  state = initialState,
  action: any,
): LegacyState => {
  switch (action.type) {
    // Handle actions
    default:
      return state;
  }
};
