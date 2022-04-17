import ActionType from "../ActionType";

const initial_state = [];

const cart_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case ActionType.GET_CART_ITEMS:
      return action.payload.carts;
    default:
      return state;
  }
};

export default cart_reducer;
