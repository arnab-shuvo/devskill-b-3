import { StatHelpText } from '@chakra-ui/react';
import {Action} from '../actions/index'
import { ActionType } from '../action_types';

const initialState = 0;

const Reducer = (state: number = initialState, action: Action) => {
    switch(action.type) {
        case ActionType.INCREMENT: return state +  action.payload;
        case ActionType.DECREMENT: return  state -  action.payload;
        default: return state;
    }
} 

// return {...state, action.payload}

export default Reducer;