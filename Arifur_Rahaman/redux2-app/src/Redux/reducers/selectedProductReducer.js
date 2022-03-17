import { action_type } from "../constants/action_type"
const initialState = {
    product: {}
}
export const selectedProductReducer = (state = initialState, action)=>{
    switch(action.type){
        case action_type.SELECTED_PRODUCT:
            return {...initialState, product: action.payload};

        default:
             return state
    }
}