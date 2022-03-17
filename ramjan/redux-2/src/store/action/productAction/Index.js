import ActionType from "../../ActionType";

export const setProductList = (productList) => ({
    type: ActionType.setProdutList,
    payload: productList,
})