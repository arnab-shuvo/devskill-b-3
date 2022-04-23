import ActionType from "../ActionType";

const initialState ={
    cart:[],
    loadCart:[],
    updateCart:[],
}

const cartReducer = (state = initialState, action)=>{
switch(action.type){
    case ActionType.ADD_TO_CART:
        return{...state, cart:action.payload}
        
    case ActionType.GET_CART_ITEMS:
        return{...state, loadCart:action.payload}
        
    case ActionType.UPDATE_CART:
        return{...state, updateCart:action.payload}
        
    case ActionType.REMOVE_FROM_CART:
        return{...state, updateCart:action.payload}

        default:
            return state;
}
}
export default cartReducer;