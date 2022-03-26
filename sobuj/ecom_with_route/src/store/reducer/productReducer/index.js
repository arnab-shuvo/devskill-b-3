import ActionType from "../../actionType";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.setproductList:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

export default productReducer;
