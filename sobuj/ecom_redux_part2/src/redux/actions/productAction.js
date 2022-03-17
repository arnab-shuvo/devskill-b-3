
import { ActionTypes } from "../constants/action-type"
export const setProducts = (products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload: products,
    };
}

export const selectedProduct = (product) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        paload:product,
    };
}