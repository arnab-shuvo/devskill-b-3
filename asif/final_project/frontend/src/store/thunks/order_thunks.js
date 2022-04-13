import axios from "axios";
import cogoToast from "cogo-toast";
import { add_carts, add_order_items } from "../action_types";

export const on_order = (navigate) => async (dispatch, getState) => {
  const { user_reducer, cart_reducer, order_reducer } = getState();
  const response = await axios.post(
    `http://localhost:8000/orders/create-order?customer_id=${user_reducer.user?.id}`,
    {
      data: { cart_list: cart_reducer },
    }
  );
  if (response.status == 200) {
    dispatch({ type: add_carts, payload: { carts: [] } });
    dispatch({
      type: add_order_items,
      payload: {
        order_items: [...order_reducer, ...response.data.order_items],
      },
    });
    return navigate("/order");
  }
  return cogoToast.warn("order didn't created");
};

export const get_order_items = (navigate) => async (dispatch, getState) => {
  const { user_reducer } = getState();
  const response = await axios.get(
    `http://localhost:8000/orders/customer-order?customer_id=${user_reducer?.user?.id}`
  );
  if (response.data.customer_order_items.length == 0)
    return cogoToast.warn("you didn't ordered anything") && navigate("/");

  dispatch({
    type: add_order_items,
    payload: { order_items: response.data.customer_order_items },
  });
};

export const delete_customer_order =
  (index, order_id) => async (dispatch, getState) => {
    const { order_reducer } = getState();
    const response = await axios.get(
      `http://localhost:8000/orders/delete-order?order_id=${order_id}`
    );
    if (response.status !== 200) return cogoToast.warn("Order did't delete!");
    dispatch({
      type: add_order_items,
      payload: {
        order_items: [
          ...order_reducer.slice(0, index),
          ...order_reducer.slice(index + 1),
        ],
      },
    });
  };

export const delete_customers_all_order =
  (navigate) => async (dispatch, getState) => {
    const { user_reducer } = getState();
    const response = await axios.get(
      `http://localhost:8000/orders/delete-customers-all-order?customer_id=${user_reducer.user.id}`
    );
    if (response.status !== 200)
      return cogoToast.warn("Cant delete orders") && navigate("/");
    dispatch({
      type: add_order_items,
      payload: {
        order_items: [],
      },
    });
    return navigate("/");
  };
