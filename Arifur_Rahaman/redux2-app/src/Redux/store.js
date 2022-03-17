import { reducers } from "./reducers";
import { createStore } from "redux";
export const store = createStore(
    reducers,
    {},
    
)