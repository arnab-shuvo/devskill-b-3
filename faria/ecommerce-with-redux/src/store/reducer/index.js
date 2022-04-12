import { combineReducers } from "redux";
import productReducer from "./productReducer";

const reducer = combineReducers({
    productr: productReducer,
});

export default reducer;