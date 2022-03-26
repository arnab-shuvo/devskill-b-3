import { combineReducers } from "redux";
import productReducer from "./productReducer";

const reducer = combineReducers({
    products: productReducer,
    productDetail: productReducer,
});

export default reducer;