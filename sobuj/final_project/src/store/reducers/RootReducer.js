import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import CategoryReducer from "./CategoryReducer";
import userReducer from "./UserReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import CartReducer from "./CartReducer";

const persistConfig = {
    key:'root',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, userReducer);

const RootReducer = combineReducers({
    userStore: persistedReducer,
    productList: productReducer,
    allProduct: productReducer,
    productDetail: productReducer,

    // categoryList:CategoryReducer,
    prodCategories:CategoryReducer,
    token:userReducer,

    handleCart:CartReducer,
});

export default RootReducer;