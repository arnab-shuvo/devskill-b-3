import { CartProduct } from "../../utilis/DTOs/User";
import { ProductCartAction, ProductCartActionTypes } from "../index";

const inittialState: CartProduct = {} as CartProduct;

const Reducer = (state = inittialState, action: ProductCartAction) => {
  switch (action.type) {
    case ProductCartActionTypes.ADDTOCART:
      return state;
    default:
      return state;
  }
};

export default Reducer;
