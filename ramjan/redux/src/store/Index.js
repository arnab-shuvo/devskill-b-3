import { createStore } from "redux";

const initialState = {
    counter: 0,
};

const reducer = (state= initialState, action) => {
    if (action.type === 'increase') {
        return {
            ...state, counter: action.payload
        }
    } else if (action.type ==='decrease') {
        return {
            ...state, counter: action.payload
        }
    }else {
        return state;
    }
}
export const store = createStore(reducer)