import { combineReducers } from "redux";
import counterReducer from "./counterReducer/counterReducer";
import loaderReducer from "./loaderReducer/loaderReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const reducers = combineReducers({
  userStore: persistedReducer,
  counterStore: counterReducer,
  loaderStore: loaderReducer,
  productStore: productReducer,
});

export default reducers;
