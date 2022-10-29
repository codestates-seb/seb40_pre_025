const TEST = "TEST";
import { initialState } from "../store/initialState";
// Action Creators
export const testAction = (text) => ({ type: TEST, text });

// Initial State
// Reducer
const initialReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default initialReducer;
