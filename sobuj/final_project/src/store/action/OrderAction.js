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

//Admin Panel Actions
const getAllOrderAdmin = (allOrdersAdmin) =>({
    type: ActionType.GET_ALL_ORDER_ADMIN,
    payload: allOrdersAdmin,
});

export const loadAllOrderAdmin = (userToken) =>{
    return function(dispatch){
        axios
        .get(`${"http://127.0.0.1:8080/order"}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer "+ userToken
            },
        })
        .then((response) =>{
            dispatch(getAllOrderAdmin(response.data));
        })
        .catch((error)=>console.log(error));
    };
};




const updateOrder = (allOrders) =>({
    type: ActionType.GET_ALL_ORDERS,
    payload: allOrders,
});

export const updateOrderAction = (userToken) =>{
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
            dispatch(updateOrder(response.data));
        })
        .catch((error)=>console.log(error));
    };
};


export const editOrder = (updateOrder) =>({
    type: ActionType.UPDATE_ORDER,
    payload: updateOrder,
});