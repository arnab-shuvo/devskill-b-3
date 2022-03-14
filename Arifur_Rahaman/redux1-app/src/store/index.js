import {createStore} from 'redux';
const counterReducer = (state=0, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state>0? state-1 :state;
        default:
            return state
    }

}
export const store = createStore(counterReducer)