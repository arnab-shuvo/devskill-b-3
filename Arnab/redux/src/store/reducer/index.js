import { combineReducers } from "redux";
import counterReducer from "./counterReducer/counterReducer";
import loaderReducer from "./loaderReducer/loaderReducer";

const reducers = combineReducers({
  counterStore: counterReducer,
  loaderStore: loaderReducer,
});

export default reducers;
