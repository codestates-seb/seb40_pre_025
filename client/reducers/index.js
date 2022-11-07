import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import initialReducer from "./initialReducer";
import anwserReducer from "./answerReducer";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default:
      return combineReducers({ initialReducer, anwserReducer })(state, action);
  }
};
export default rootReducer;
