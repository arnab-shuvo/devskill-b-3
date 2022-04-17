import user_reducer from "./user_reducer";
import cart_reducer from "./cart_reducer";
import order_reducer from "./order_reducer";
import owner_reducer from "./owner_reducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
  user_reducer,
  cart_reducer,
  order_reducer,
  owner_reducer,
});

export default reducers;
