import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducer";
import thunk from "redux-thunk";

const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const store = createStore(
  reducers,
  composeEnhencer(applyMiddleware(thunk))
);
