import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  redux: newsReducer,
  shop: shopReducer,
});

export default rootReducer;
