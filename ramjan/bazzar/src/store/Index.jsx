import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from 'redux-persist';
import thunk from "redux-thunk";
import reducers from "./reducers/Index";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 

export const store =
    createStore(
        reducers,
        composeEnhancer(applyMiddleware(thunk))
    );

export const persistor = persistStore(store); 