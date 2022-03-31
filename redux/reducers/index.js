import { combineReducers } from "redux";
import invoiceReducer from "./invoiceReducer";
import newsReducer from "./newsReducer";
import shopReducer from "./shopReducer";
import userManagementReducer from "./userManagementReducer";

const rootReducer = combineReducers({
  redux: newsReducer,
  shop: shopReducer,
  user: userManagementReducer,
  invoice: invoiceReducer,
});

export default rootReducer;
