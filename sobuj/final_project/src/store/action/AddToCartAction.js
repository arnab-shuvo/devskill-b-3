import ActionType from "../ActionType";
import axios from "axios";

//Adding Cart Item
export const addCart = (cartProduct) =>({
    type: ActionType.ADD_TO_CART,
    payload: cartProduct
});


//Adding Cart Item
export const delCart = (cartProduct) =>({
    type: ActionType.DEL_FROM_CART,
    payload: cartProduct
});