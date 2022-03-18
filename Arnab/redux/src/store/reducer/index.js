import { combineReducers } from "redux";
import counterReducer from "./counterReducer/counterReducer";
import loaderReducer from "./loaderReducer/loaderReducer";
import productReducer from "./productReducer";

const reducers = combineReducers({
  counterStore: counterReducer,
  loaderStore: loaderReducer,
  productStore: productReducer,
});

export default reducers;
