import { dispatch } from "../store";
import * as t from "../types";

export const setCategory = (category) => {
  dispatch({ type: t.SET_CATEGORY, payload: category });
};


export const getTodo = (category) => {
  dispatch({ type: t.ADD_TODO, payload: category });
};

export const deletTodo = (category) => {
  dispatch({ type: t.REMOVE_TODO, payload: category });
};
