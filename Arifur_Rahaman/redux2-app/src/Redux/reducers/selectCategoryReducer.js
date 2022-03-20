import { action_type } from "../constants/action_type"
const initialState = {
    product: ""
}
export const selectCategoryReducer = (state = initialState, action)=>{
    switch(action.type){
        case action_type.SET_PRODUCT_CATEGORY:
            return {...initialState, product: action.payload};

        default:
             return state
    }
}