import { Dispatch } from "react";
import { ProductCartActionTypes } from "../action-types";
import { ProductCartAction } from "../actions";

export const AddProductToCart = (productId: string) => {
  return (dispatch: Dispatch<ProductCartAction>) => {
    dispatch({
      type: ProductCartActionTypes.ADDTOCART,
      payload: productId,
    });
  };
};
