
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

export const addProductAction = (addProduct) =>({
    type:ActionType.ADD_NEW_PRODUCT,
    payload:addProduct
});

export const productDeleteAction = (delProduct) =>({
    type: ActionType.deleteProduct,
    payload: delProduct
});
 
export const productUpdateAction = (updateProduct) =>({
    type:ActionType.UPDATE_PRODUCT,
    payload: updateProduct
});