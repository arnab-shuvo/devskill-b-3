import ActionType from "../ActionType";

const initialState ={
    checkout:[],
    orders:[],
    // getAllOrders:[],
}

const orderReducer = (state = initialState, action)=>{
    switch(action.type){
        case ActionType.GET_ALL_ORDERS:
            return{...state, orders: action.payload} 

        case ActionType.CHECKOUT:
            return{...state, checkoutDone:true, checkout: action.payload}
             
        case ActionType.MY_ORDERS:
            return{...state, orders: action.payload}
            
            default:
                return state;
    }
}
export default orderReducer;