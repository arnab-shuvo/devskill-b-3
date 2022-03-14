import {Dispatch} from 'redux';
import { Action } from '../actions';
import { ActionType } from '../action_types';

export const Increment = (count: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.INCREMENT,
            payload: count
        })
    }
}

export const Decrement = (count: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DECREMENT,
            payload: count
        })
    }
}