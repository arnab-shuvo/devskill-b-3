import ActionType from "../../actionType";

export const setProductlist = (productList) => ({
  type: ActionType.setproductList,
  payload: productList,
});
