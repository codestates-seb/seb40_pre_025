const CHANGE_INPUT = "CHANGE_INPUT";
const RESET_INPUT = "RESET_INPUT";

//initial
const initialState = {
  value: "",
};

export const changeInputAction = value => ({
  // 액션 생성 함수
  type: CHANGE_INPUT,
  payload: value,
});

export const resetInputAction = value => ({
  // 액션 생성 함수
  type: RESET_INPUT,
});

// Reducer
const anwserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { value: action.payload };
    case RESET_INPUT:
      return { value: "" };
    default:
      return state;
  }
};

export default anwserReducer;
