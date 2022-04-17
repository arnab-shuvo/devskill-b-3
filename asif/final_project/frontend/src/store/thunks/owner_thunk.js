import axios from "axios";
import cogoToast from "cogo-toast";
import { add_owner, remove_owner } from "../action_types";
export const owner_login = (e, navigate, data) => async (dispatch) => {
  e.preventDefault();
  const response = await axios.post("http://localhost:8000/admin/login", {
    ...data,
  });
  dispatch({
    type: add_owner,
    payload: { owner: response.data.owner, token: response.data.token },
  });
  return navigate("/owner-dashboard");
};

export const owner_logout = (navigate) => async (dispatch) => {
  dispatch({ type: remove_owner });
  return navigate("/");
};

export const get_orders_by_status = async (status) => {
  const response = await axios.get(
    `http://localhost:8000/orders?order_status=${status}`
  );
  return response.data.orders;
};

export const delete_customers_order = async (customer_id, order_status) => {
  const response = await axios.get(
    `http://localhost:8000/orders/delete-customers-all-order?customer_id=${customer_id}&order_status=${order_status}`
  );
  return response.status !== 200 ? false : true;
};

export const get_customer_list = async (navigate) => {
  const response = await axios.get(
    "http://localhost:8000/admin/get-all-customers"
  );
  if (response.status !== 200) {
    cogoToast.warn("there is no customers");
    navigate("/owner-dashboard");
    return false;
  }
  return response.data.customers;
};

export const change_customer_status = async (
  index,
  customer_id,
  status,
  setCustomers
) => {
  const response = await axios.get(
    `http://localhost:8000/admin/change-customer-status?customer_id=${customer_id}&status=${status}`
  );

  response.status == 200 &&
    setCustomers((prev_customers) => [
      ...prev_customers.slice(0, index),
      response.data.updated_customer,
      ...prev_customers.slice(index + 1),
    ]);
};

export const delete_customer = async (index, customer_id, setCustomers) => {
  const response = await axios.get(
    `http://localhost:8000/admin/delete-customer?customer_id=${customer_id}`
  );
  response.status == 200 &&
    setCustomers((prev_customers) => [
      ...prev_customers.slice(0, index),
      ...prev_customers.slice(index + 1),
    ]);
};

export const create_product = async (data, set_creating_post) => {
  const response = await axios.post(
    "http://localhost:8000/products/create-product",
    { ...data }
  );
  if (response.status == 200) {
    cogoToast.success("product created successfully");
    return set_creating_post(false);
  }
  cogoToast.error("Cant create !");
};

export const delete_product = async (product_id) => {
  const response = await axios.get(
    `http://localhost:8000/products/delete-product?product_id=${product_id}`
  );
  return response.status == 200 ? true : false;
};

export const get_categories = async () => {
  const response = await axios.get("http://localhost:8000/category");
  return response.status !== 200 ? false : response.data.categories;
};
