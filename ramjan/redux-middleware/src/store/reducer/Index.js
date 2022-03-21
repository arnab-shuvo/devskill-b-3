import { combineReducers } from "redux";
import counterReducer from "./counterReducer/counterReducer";
import loaderReducer from "./loaderReducer/loaderReducer";
import productReducer from "./productReducer/Productreducer";




const reducers = combineReducers({
    countStore: counterReducer,
    loaderStore: loaderReducer,
    productStore: productReducer,
});

export default reducers;