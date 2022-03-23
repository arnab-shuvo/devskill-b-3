import ActionType from "../../actionType";

export const setProductList = (productList) =>({
    type: ActionType.setProductList,
    payload:productList,
});

export const getProductDetail = (productID) =>({
    type: ActionType.getProductDetail,
    payload:productID,
});