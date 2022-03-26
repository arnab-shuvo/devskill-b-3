import {createStore} from "redux"
import ActionType from "./action/actionType";
import reducers from "./reducer";

export const store = createStore(reducers);