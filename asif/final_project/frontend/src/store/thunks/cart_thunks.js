import axios from "axios";
import cogoToast from "cogo-toast";
import { add_carts } from "../action_types";

export const get_carts = (navigate) => async (dispatch, getState) => {
  const { user_reducer } = getState();
  const get_cart_list = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/carts?customer_id=${user_reducer.user?.id}`
      );
      response.data.carts.length == 0
        ? cogoToast.warn("you didn't add any cart yet!") && navigate("/")
        : dispatch({
            type: add_carts,
            payload: { carts: response.data.carts },
          });
    } catch (error) {
      return cogoToast.error(error);
    }
  };
  get_cart_list();
};
export const on_delete_cart =
  (index, cart_id) => async (dispatch, getState) => {
    const { cart_reducer } = getState();
    const response = await axios.get(
      `http://localhost:8000/carts/delete-cart?cart_id=${cart_id}`
    );
    response.status == 200 &&
      dispatch({
        type: add_carts,
        payload: {
          carts: [
            ...cart_reducer.slice(0, index),
            ...cart_reducer.slice(index + 1),
          ],
        },
      });
  };
export const change_cart_quantity =
  (index, cart_id, quantity, price) => async (dispatch, getState) => {
    const { cart_reducer } = getState();
    if (quantity == 0) return;
    const response = await axios.post(
      `http://localhost:8000/carts/update-cart?cart_id=${cart_id}`,
      {
        data: {
          quantity,
          price,
        },
      }
    );
    dispatch({
      type: add_carts,
      payload: {
        carts: [
          ...cart_reducer.slice(0, index),
          response.data.cart,
          ...cart_reducer.slice(index + 1),
        ],
      },
    });
  };

export const delete_all_carts = (navigate) => async (dispatch, getState) => {
  const { user_reducer } = getState();
  const response = await axios.get(
    `http://localhost:8000/carts/delete-all-carts?customer_id=${user_reducer.user?.id}`
  );
  response.status == 200
    ? dispatch({ type: add_carts, payload: { carts: [] } }) && navigate("/")
    : cogoToast.warn("cant delete carts");
};
