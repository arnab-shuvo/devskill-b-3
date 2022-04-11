
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

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyNDdlYTQ5OTgwNjJjNDg0NDgxZmRkOSIsImVtYWlsIjoicmFpaGFuLnNhYnVqQHlhaG9vLmNvbSJ9LCJpYXQiOjE2NDk1NjY0ODYsImV4cCI6MTY0OTczOTI4Nn0.gHOTWrdIentkxTGmBnKhfXMsTDIr5ntPNO7jjBJmUkA";

export const deleteProduct = (id) =>{
    return function(dispatch){
        // axios
        // .delete(`${"http://127.0.0.1:8080/products"}/${id}`)
        // .then((response) =>{
        //     dispatch(productDeleted());
        //     dispatch(getProductList());
        // })
        // .catch((error)=>console.log(error));

        axios.post(`http://10.0.1.14:8000/products/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },      
        })      
        .then((response) => {
            console.log('response',response)
            dispatch(productDeleted());
            dispatch(getProducts(response.data));
        })
        .catch((error) => {
            alert('error',error.response)
            dispatch(productDeleted())

        })
    // console.log('----cheers---------',data)
    };
};

