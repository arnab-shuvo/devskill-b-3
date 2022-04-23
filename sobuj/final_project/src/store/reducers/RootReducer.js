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
    // userDetailInfo:userReducer,
    userList:userReducer,
    
    productList: productReducer,
    allProduct: productReducer,
    productDetail: productReducer,
    newProduct: productReducer,
    updateProduct:productReducer,

    prodCategories:CategoryReducer,
    token:userReducer,

    cartData:cartReducer,
    cartItems:cartReducer,
    
    orders: orderReducer,
    getAllOrders:orderReducer,
    manageOrders:orderReducer,
    updateOrders:orderReducer,

    addCategory:CategoryReducer,
});

export default RootReducer;