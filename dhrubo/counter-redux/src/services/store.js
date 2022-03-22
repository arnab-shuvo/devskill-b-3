import { createStore } from "redux";
import rootReducer from './reducers/index'; 

const initialState = {}
export const store = createStore(
    rootReducer,
    initialState
)
