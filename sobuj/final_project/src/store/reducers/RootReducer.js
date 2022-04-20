import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import CategoryReducer from "./CategoryReducer";
import userReducer from "./UserReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import cartReducer from "./CartReducer";
import orderReducer from "./OrderReducer";

const persistConfig = {
    key:'root',
    storage,
}

export const persistedReducer = persistReducer(persistConfig, userReducer);

const RootReducer = combineReducers({
    userStore: persistedReducer,
    newUser:userReducer,

    productList: productReducer,
    allProduct: productReducer,
    productDetail: productReducer,
    newProduct: productReducer,

    prodCategories:CategoryReducer,
    token:userReducer,

    cartData:cartReducer,
    cartItems:cartReducer,
    orders: orderReducer,
    getAllOrders:orderReducer,

    addCategory:CategoryReducer,
});

export default RootReducer;