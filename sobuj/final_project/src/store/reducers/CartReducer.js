import ActionType from "../ActionType";

const initialState ={
    cart:[],
}

const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionType.ADD_TO_CART:
            return{...state, cart:action.payload}
            
        case ActionType.GET_CART_ITEMS:
            return{...state, cart:action.payload}

            default:
                return state;
    }
}
export default cartReducer;