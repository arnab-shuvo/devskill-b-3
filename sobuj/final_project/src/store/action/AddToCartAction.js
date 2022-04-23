import ActionType from "../ActionType";
import axios from "axios";
 
//Adding Cart Item
export const addCart = (cartProduct) =>({
    type: ActionType.ADD_TO_CART,
    payload: cartProduct
});

//Modify Cart Items
export const modifyCartAction = (modifyCart) =>({
    type: ActionType.UPDATE_CART,
    payload: modifyCart
});


//Remove Cart Item
export const removeCartAction = (cartID) =>({
    type: ActionType.REMOVE_FROM_CART,
    payload: cartID
});

//Get Cart Items
export const getCartItems = (cartItems) =>({
    type: ActionType.GET_CART_ITEMS,
    payload: cartItems
})

export const loadCartItems = (token) =>{ 
    return function(dispatch){
        axios
        .get(`${"http://127.0.0.1:8080/cart"}`,{
            method: "GET",
            headers: {
            "authorization": "bearer "+ token
            },
        })
        .then((response) =>{
           dispatch(getCartItems(response.data));
        })
        .catch((error)=>console.log(error));
    };
};
 