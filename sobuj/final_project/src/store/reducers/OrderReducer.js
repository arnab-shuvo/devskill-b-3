import ActionType from "../ActionType";

const initialState ={
    checkout:[],
}

const orderReducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionType.CHECKOUT:
            return{...state, checkout:action.payload}
             

            default:
                return state;
    }
}
export default orderReducer;