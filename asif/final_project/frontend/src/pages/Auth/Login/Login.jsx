import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { user_login } from "../../../store/thunks/user_thunks";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import "./login_styles.css";
import { owner_login } from "../../../store/thunks/owner_thunk";
const Login = () => {
  const [data, setData] = useState({
    email: null,
    password: null,
  });
  const { token } = useSelector((store) => store.user_reducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {token ? (
        <Navigate replace to="/" />
      ) : (
        <form
          className="login-form"
          onSubmit={(e) =>
            location.pathname == "/login"
              ? dispatch(user_login(e, data))
              : dispatch(owner_login(e, navigate, data))
          }
        >
          <h3 className="customer-login-header">
            {location.pathname == "/login" ? "Customer" : "Owner"} Login
          </h3>
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
          <div className="oauth-section">
            <p>Login with</p>
            <div className="oauth-option-container">
              <IconButton className="icon-button">
                <FcGoogle />
              </IconButton>
              <p>or</p>
              <IconButton className="icon-button">
                <AiFillGithub />
              </IconButton>
            </div>
          </div>
          {location.pathname == "/login" && (
            <p onClick={() => navigate("/signup")}>Dont have an account?</p>
          )}
          <p
            onClick={() =>
              location.pathname == "/login"
                ? navigate("/owner-login")
                : navigate("/login")
            }
          >
            Login as a {location.pathname == "/login" ? "owner" : "customer"}?
          </p>
        </form>
      )}
    </>
  );
};

export default Login;
