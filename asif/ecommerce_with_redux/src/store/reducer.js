import { SET_PRODUCTS } from "./actionTypes";

const initial_state = {
  products: [],
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    default:
      return state;
  }
};

export default reducer;
