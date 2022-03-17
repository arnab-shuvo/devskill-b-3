import { Dispatch } from "redux";
import { GetProductsAsync } from "../../services/ProductService";
import { ProductType } from "../../utilities/ProductType";
import Action from "../actions";
import ActionType from "../action_types";

export const GetAllProducts = () => {
  return async (dispatch: Dispatch<Action>) => {
    const products = await GetProductsAsync();
    dispatch({
      type: ActionType.GETALLPRODUCT,
      payload: products,
    });
  };
};

export const GetProduct = (productId: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GETPRODUCT,
      payload: productId,
    });
  };
};

export const Insert = (product: ProductType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.INSERT,
      payload: product,
    });
  };
};

export const Update = (product: ProductType) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE,
      payload: product,
    });
  };
};

export const Delete = (productId: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE,
      payload: Number(productId),
    });
  };
};
