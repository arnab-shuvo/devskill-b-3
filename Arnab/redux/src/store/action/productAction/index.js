import ActionType from "../../actionType";
import { productListApi } from "../../../utils/api";

const setProductList = (list) => ({
  type: ActionType.setAllProducts,
  payload: list,
});

const seterror = (list) => ({
  type: ActionType.setAllProducts,
  payload: list,
});

export const getProductListAction = () => {
  return async (dispatch, getStore) => {
    console.log(getStore().counterStore);
    // try {
    //   const data = await productListApi();
    //   dispatch(setProductList(data));
    // } catch (error) {
    //   dispatch(setProductList(data));
    // }
  };
};
