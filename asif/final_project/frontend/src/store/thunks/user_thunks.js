import axios from "axios";
import { add_user, logout } from "../action_types";
import cogoToast from "cogo-toast";
export const user_login = (e, data) => async (dispatch) => {
  e.preventDefault();
  const response = await axios.post(
    "http://localhost:8000/customer/customer-login",
    {
      ...data,
    }
  );
  dispatch({
    type: add_user,
    payload: { user: response.data.customer, token: response.data.token },
  });
};
export const user_logout = () => (dispatch) => {
  dispatch({ type: logout });
};

export const user_update = (e, data) => async (dispatch, getState) => {
  const { user_reducer } = getState();
  const { user, token } = user_reducer;
  e.preventDefault();
  const response = await axios.post(
    "http://localhost:8000/customer/update-profile",
    {
      data,
    }
  );
  if (response.status !== 200)
    return cogoToast.error("Cant update the profile!");
  dispatch({
    type: add_user,
    payload: {
      user: {
        ...user,
        ...response.data.updated_customer_profile,
      },
      token,
    },
  });
};
