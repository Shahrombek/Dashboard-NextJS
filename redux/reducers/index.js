import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import shopReducer from "./shopReducer";
import userManagementReducer from "./userManagementReducer";

const rootReducer = combineReducers({
  redux: newsReducer,
  shop: shopReducer,
  user: userManagementReducer,
});

export default rootReducer;
