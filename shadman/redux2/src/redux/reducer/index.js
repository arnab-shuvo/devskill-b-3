import { combineReducers } from "redux";
import productReducer from "./productReducer";
import selectedProductReducer from "./selectedProductReducer";


const reducer = combineReducers({
    products: productReducer,
    product: selectedProductReducer
})

export default reducer