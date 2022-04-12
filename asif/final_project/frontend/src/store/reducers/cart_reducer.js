import { add_carts } from "../action_types";

const initial_state = [];

const cart_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case add_carts:
      return action.payload.carts;
    default:
      return state;
  }
};

export default cart_reducer;
