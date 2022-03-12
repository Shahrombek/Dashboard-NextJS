import { combineReducers } from "redux";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  redux: newsReducer,
});

export default rootReducer;
