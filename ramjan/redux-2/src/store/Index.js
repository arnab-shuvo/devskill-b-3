import { createStore } from "redux";
import reducers from "./reducer/Index";

export const store = createStore(reducers)