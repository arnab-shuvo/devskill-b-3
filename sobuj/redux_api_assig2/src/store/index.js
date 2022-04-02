import { width } from "@mui/system";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhencer =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export const store = createStore(
    reducer, 
    composeEnhencer(applyMiddleware(thunk))
);
