import { createStore } from "redux";
import reducres from "./reducer/Index";


export const store = createStore(reducres)