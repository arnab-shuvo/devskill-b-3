import { combineReducers } from "redux";
import productReducer from "./ProductReducer";

const RootReducer = combineReducers({
    productList: productReducer,
    productDetail: productReducer,
});

export default RootReducer;