import ActionType from "../ActionType";

const initialState ={
    checkout:[],
    orders:[],
}

const orderReducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionType.CHECKOUT:
            return{...state, checkout:action.payload}
             
        case ActionType.CHECKOUT:
            return{...state, orders:action.payload}
            
            default:
                return state;
    }
}
export default orderReducer;