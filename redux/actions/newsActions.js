import { dispatch } from "../store";
import * as t from "../types";

// Layout section
export const setCategory = (category) => {
  dispatch({ type: t.SET_CATEGORY, payload: category });
};

// Todo section
export const getTodo = (category) => {
  dispatch({ type: t.ADD_TODO, payload: category });
};

export const deletTodo = (category) => {
  dispatch({ type: t.REMOVE_TODO, payload: category });
};

// Chat section
export const getMsg = (data) => {
  dispatch({ type: t.ADD_MSG, payload: data });
}

// Shop section
export const selCategory = (item) => {
  dispatch({ type: t.SELECT_CATEGORY, payload: item });
}

export const selSort = (item) => {
  dispatch({ type: t.SELECT_SORT, payload: item });
}

export const addProduct = (item) => {
  dispatch({ type: t.ADD_PRODUCT, payload: item });
}

export const changeProductNum = (item) => {
  dispatch({ type: t.CHANGE_PRODUCT_NUM, payload: item });
}

export const findProduct = (item) => {
  dispatch({ type: t.FIND_PRODUCT, payload: item });
}


// user Grid

export const addNewUser = (item) => {
  dispatch({ type: t.ADD_USER, payload: item });
}

export const findUser = (item) => {
  dispatch({ type: t.FIND_USER, payload: item });
}

