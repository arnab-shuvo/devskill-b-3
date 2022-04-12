import axios from "axios";
import { add_user, logout } from "../action_types";

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
