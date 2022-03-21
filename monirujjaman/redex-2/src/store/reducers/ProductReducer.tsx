import { ProductType } from "../../utilities/ProductType";
import Action from "../actions";
import ActionType from "../action_types";

const initialState: ProductType[] = [];

const Reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GETALLPRODUCT:
      return [...action.payload];
    case ActionType.GETPRODUCT:
      return [...state];
    case ActionType.INSERT:
      return [...state, action.payload];
    case ActionType.UPDATE: {
      const products = [...state];
      const index = products.findIndex((x) => x.id === action.payload.id);
      products[index] = action.payload;
      state = products;
      return state;
    }
    case ActionType.DELETE: {
      const products = [...state];
      state = products.filter((x) => x.id !== action.payload);
      return state;
    }
    default:
      return state;
  }
};

export default Reducer;
