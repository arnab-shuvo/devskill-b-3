import { createSlice } from '@reduxjs/toolkit';

import {createStore} from "redux"

const initialState = {
    counter: 0,
};

/*
const reducer = (state = initialState, action) =>{
    if(action.type === "increase"){
        return {...state, counter: action.payload};
    }else{
        return state;
    }
    
};
export const store = createStore(reducer);
*/
export const counterSlice = createSlice({ //counterSlice
    name:'counter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers:{
        increment:(state)=>{
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement:(state)=>{
            state.value -= 1;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;