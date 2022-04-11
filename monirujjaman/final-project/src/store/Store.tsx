import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import Reducers from "./reducers";

const Store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(Store);

export default Store;
