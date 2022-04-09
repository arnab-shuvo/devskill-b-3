import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import userReducer from "./UserReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";

const persistConfig = {
    key:'root',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, userReducer);

const RootReducer = combineReducers({
    userStore: persistedReducer,
    productList: productReducer,
    loadProducts: productReducer,
    productDetail: productReducer,
    token:userReducer,
});

export default RootReducer;