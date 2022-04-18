import ActionType from "../ActionType";
import axios from "axios";
 
//Adding Cart Item
export const addCart = (cartProduct) =>({
    type: ActionType.ADD_TO_CART,
    payload: cartProduct
});


//Adding Cart Item
export const removeCartAction = (cartID) =>({
    type: ActionType.REMOVE_FROM_CART,
    payload: cartID
});
export const removeCartItem = (prodID, userToken)=>{
    // console.log(prodID, '----- Product ID from Cart Delte Action')
    // console.log(userToken, '----- UserTOken from Cart Delte Action')
    return function(dispatch){
        axios
        .get(`${"http://127.0.0.1:8080/cart"}`,{
            method: "POST",
            headers: {
                "Content-type" : "application/json",
                "Accept"       : "application/json",
                "authorization": "bearer "+ userToken
              },
              body: JSON.stringify({
                product: {
                  id: prodID,
                  quantity: 0,
                },
              }),
        })
        .then((response) =>{
            console.log("response", response);
            dispatch(removeCartAction(response.data));
        })
        .catch((error)=>console.log(error));
    };
}


//Get Cart Items
export const getCartItems = (cartItems) =>({
    type: ActionType.GET_CART_ITEMS,
    payload: cartItems
})
export const loadCartItems = (token) =>{ // Dispatcher
    //console.log(token, '=== token form Action Page')
    return function(dispatch){
        axios
        .get(`${"http://127.0.0.1:8080/cart"}`,{
            method: "GET",
            headers: {
            "authorization": "bearer "+ token
            },
        })
        .then((response) =>{
            console.log("response", response);
            dispatch(getCartItems(response.data));
        })
        .catch((error)=>console.log(error));
    };
};
 