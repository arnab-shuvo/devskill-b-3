
import ActionType from "../ActionType";
import axios from "axios";

export const getProductList = (productList) =>({
    type: ActionType.getProductList,
    payload: productList
});

export const getProductDetail = (productDetail)=>({
    type: ActionType.getProductDetail,
    payload: productDetail
});

const getProducts = (allProduct) =>({
    type: ActionType.getLoadProducts,
    payload: allProduct,
});

export const loadProducts = () =>{
    return function(dispatch){
        axios
        .get(`${"http://127.0.0.1:8080/products"}`)
        .then((response) =>{
            dispatch(getProducts(response.data));
        })
        .catch((error)=>console.log(error));
    };
};

const productDeleted = (id) =>({
    type: ActionType.deleteProduct,
});

export const deleteProduct = (id) =>{
    return function(dispatch){
        axios
        .delete(`${"http://127.0.0.1:8080/products"}/${id}`)
        .then((response) =>{
            dispatch(productDeleted());
            dispatch(getProductList());
        })
        .catch((error)=>console.log(error));
    };
};

