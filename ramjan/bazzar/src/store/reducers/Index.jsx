import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AddProductReducer from "./AddProductReducer/Index";
import categoryReducer from "./Category/Index";
import categoryProductReducer from "./CategoryProductReducer/Index";
import counterReducer from "./CounterReducer/CounterRedcer";
import allUserReducer from "./GetAllUsersReducer/Index";
import loaderReducer from "./LoaderReducer/LoaderReducer";
import productReducer from "./ProductReducer/Index";
import shopReducer from './ShoppingReducer/Index';
import singleProductReducer from './SingleProductReducer/Index';
import userReducer from "./UserReducer/Index";



const persistConfig = {
        key: 'root',
        storage,
       
}

const persistedReducer = persistReducer(persistConfig, userReducer)

const reducers = combineReducers({
        userStore : persistedReducer,
        counterStore: counterReducer,
        loaderStore: loaderReducer,
        productStore : productReducer,
        singleProductStore : singleProductReducer,
        categoryStore: categoryReducer,
        categoryProductStore: categoryProductReducer,
        allUserStore: allUserReducer,
        addProductStore:AddProductReducer,
        shoppingStore:shopReducer,
})

export default reducers;

