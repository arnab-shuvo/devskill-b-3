import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import loaderReducer from "./loaderReducer";

const reducres = combineReducers({
        countStore : counterReducer,
        loadStore : loaderReducer,
})

export default reducres