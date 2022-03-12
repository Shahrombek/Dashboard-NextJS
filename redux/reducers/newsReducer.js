import * as t from "../types";

const initialState = {
 
};

const newsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case t.SET_CATEGORY:
      return state;
    default:
      return state;
  }
};

export default newsReducer;
