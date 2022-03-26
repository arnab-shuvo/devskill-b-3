import ActionType from "../../actionType";

export const setproductList = (productList) => ({
    type: ActionType.setproductList,
    payload: productList
})

export const setselectedProduct = (product) => ({
    type: ActionType.selectedProduct,
    payload: product
})