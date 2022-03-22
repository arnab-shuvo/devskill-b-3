import {increment_value, decrement_value} from '../actions/types'

export const increment = () => {
    return{
        type: increment_value
    }
}

export const decrement = () => {
    return{
        type: decrement_value
    }
}