import {createStore} from 'redux';
const initialState={
    userInfo:{} ,
};
const reducer= (state=initialState,action)=>{
    if(action.type=== "setUserInfo"){
    return {...state,userInfo: action.payload};
    }
    if(action.type=== "deleteUserInfo"){
        return {...state,userInfo: null};
    }
}
export const store=createStore(reducer);