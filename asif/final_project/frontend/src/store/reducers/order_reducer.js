import { add_order } from "../action_types";

const initial_state = null;

const order_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case add_order:
      return action.payload.order;

    default:
      return state;
  }
};

export default order_reducer;
