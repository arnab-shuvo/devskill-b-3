import {increment_value, decrement_value} from '../actions/types'

const initialState = {
    count: 2
    } 

export default function counterReducer(state = initialState, action){
    switch(action.type){
        case increment_value: 
        return{
            ...state,
            count: state.count + 1
        }
        case decrement_value:
            return{
                ...state,
                count: state.count -1
            }
        default:
            return state;
    }
}