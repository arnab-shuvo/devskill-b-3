import ActionType from "../../actionType";

const initialState = {
  productList: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.setAllProducts:
      return { ...state, productList: action.payload };

    default:
      return state;
  }
};

export default productReducer;
