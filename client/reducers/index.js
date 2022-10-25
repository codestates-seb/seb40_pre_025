import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import initialReducer from "./initialReducer";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default:
      return combineReducers({ initialReducer })(state, action);
  }
};
export default rootReducer;
