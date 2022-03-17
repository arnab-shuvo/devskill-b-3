import ActionType from "../../actionType";

export const setProducts = (products) =>({
    type: ActionType.setProducts,
    payload: products,
});
