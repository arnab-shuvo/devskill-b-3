import { width } from "@mui/system";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// export const storeoo = createStore(
//     // reducer, composeEnhancer(applyMiddleware(thunk))
//     reducer, applyMiddleware(thunk)

// );

// export const store14 = createStore(
//     reducer, 
//     compose(applyMiddleware(thunk), composeEnhancer));

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));