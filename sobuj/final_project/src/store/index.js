import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from "./reducers/RootReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

export const store = createStore(RootReducer, 
    composeEnhancer(applyMiddleware(thunk)));