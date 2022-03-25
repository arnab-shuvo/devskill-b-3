import { createStore, compose, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import reducers from "./reducer";
import thunk from "redux-thunk";

const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(
  reducers,
  composeEnhencer(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
