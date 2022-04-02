import {createStore, compose, applyMiddleware} from "redux"
import ActionType from "./action/actionType";
import reducers from "./reducer";
import thunk from "redux-thunk";

// const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

// export const store = createStore( 
//     reducers, 
//     composeEnhancer(applyMiddleware(thunk))
// );

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

export const store = createStore(
    //reducers, composeEnhancer(applyMiddleware(thunk)) //not working
    reducers, composeEnhancer //working
    
  );
