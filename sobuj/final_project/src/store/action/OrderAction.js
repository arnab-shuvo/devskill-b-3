import axios from "axios";
import ActionType from "../ActionType";


export const getMyOrders = (myOrders) =>({
    type: ActionType.MY_ORDERS,
    payload: myOrders
});

export const checkoutAction = (checkout) =>({
    type: ActionType.CHECKOUT,
    payload: checkout,
});

const getOrders = (allOrders) =>({
    type: ActionType.GET_ALL_ORDERS,
    payload: allOrders,
});

export const loadOrders = (userToken) =>{
    return function(dispatch){
        axios
        .get(`${"http://127.0.0.1:8080/order/my-order"}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer "+ userToken
            },
        })
        .then((response) =>{
            dispatch(getOrders(response.data));
        })
        .catch((error)=>console.log(error));
    };
};