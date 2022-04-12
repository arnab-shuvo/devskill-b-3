import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/main";
const store = createStore(reducers, applyMiddleware(thunk));
export const persistore = persistStore(store);

export default store;
