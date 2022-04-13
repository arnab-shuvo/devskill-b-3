import { add_order_items } from "../action_types";

const initial_state = [];

const order_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case add_order_items:
      return [...action.payload.order_items];

    default:
      return state;
  }
};

export default order_reducer;
