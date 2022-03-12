import { dispatch } from "../store";
import * as t from "../types";

export const setCategory = (category) => {
  dispatch({ type: t.SET_CATEGORY, payload: category });
};
