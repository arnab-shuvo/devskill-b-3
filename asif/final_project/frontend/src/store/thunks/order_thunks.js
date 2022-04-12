import axios from "axios";
import cogoToast from "cogo-toast";
import { add_carts, add_order } from "../action_types";

export const on_order = (price, navigate) => async (dispatch, getState) => {
  const { user_reducer, cart_reducer } = getState();
  let product_id_quantity_price_list_string = "";
  cart_reducer.map((cart, index) => {
    let data_str = `${cart.id}=${cart.quantity}=${cart.price}`;
    product_id_quantity_price_list_string =
      product_id_quantity_price_list_string +
      `${index !== 0 ? "," : ""}${data_str}`;
  });
  const response = await axios.post(
    `http://localhost:8000/orders/create-order?customer_id=${user_reducer.user?.id}`,
    {
      data: { product_id_quantity_price_list_string, price },
    }
  );
  response.data.order
    ? dispatch({ type: add_carts, payload: { carts: [] } }) &&
      dispatch({ type: add_order, payload: { order: response.data.order } }) &&
      navigate("/order")
    : cogoToast.warn("order didn't created");
};
