import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loaderReducer from "./loaderReducer";

const reducers = combineReducers({
    counterStore: counterReducer,
    loaderStore: loaderReducer,
})

export default reducers;
