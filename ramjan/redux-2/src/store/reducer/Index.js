import { combineReducers } from "redux";
import productReducer from "./productReducer/Index";


const reducers = combineReducers({
    products: productReducer,
});

export default reducers;