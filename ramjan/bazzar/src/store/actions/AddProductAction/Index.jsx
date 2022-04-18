import ActionType from "../../ActionType";

export const setNewProductAction = (newProductInfo) => ({
    type: ActionType.addProduct,
    payload: newProductInfo,
})

