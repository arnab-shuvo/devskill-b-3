import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from "./reducers/RootReducer";
import thunk from "redux-thunk";
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

export const store = createStore(
    RootReducer, 
    composeEnhancer(applyMiddleware(thunk)));
//, loggerMiddleware

export const persistor = persistStore(store);
