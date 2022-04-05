import ActionType from "../ActionType";

export const getProductList = (productList) =>({
    type: ActionType.getProductList,
    payload: productList
});

export const getProductDetail = (productDetail)=>({
    type: ActionType.getProductDetail,
    payload: productDetail
});