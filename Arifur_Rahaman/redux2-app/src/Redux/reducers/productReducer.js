import { action_type } from "../constants/action_type"
const initialState = {
    products: []
}
export const productReducer = (state = initialState, action)=>{
    switch(action.type){
        case action_type.SET_PRODUCTS:
            return {...initialState, products: action.payload};

        default:
             return state
    }
}