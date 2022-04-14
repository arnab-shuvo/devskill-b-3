import { Button } from "@mui/material";
import React, { useState } from "react";
import { user_login } from "../../../store/thunks/user_thunks";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "./login_styles.css";
const Login = () => {
  const [data, setData] = useState({
    email: null,
    password: null,
  });
  const { token } = useSelector((store) => store.user_reducer);
  const dispatch = useDispatch();

  return (
    <>
      {token ? (
        <Navigate replace to="/" />
      ) : (
        <>
          <h3 className="customer-login-header">Customer Login</h3>
          <form
            className="login-form"
            onSubmit={(e) => dispatch(user_login(e, data))}
          >
            <div>
              <label for="email">Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            <div>
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={(e) =>
                  setData((prev) => ({ ...prev, password: e.target.value }))
                }
              />
            </div>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Login
            </Button>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
