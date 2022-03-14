import {ActionType} from '../action_types/index'

interface IncrementAction {
    type : ActionType.INCREMENT,
    payload: number
}

interface DecrementAction {
    type : ActionType.DECREMENT,
    payload: number
}

export type Action = IncrementAction | DecrementAction;