import React from "react";
import "./navigation_styles.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/action_types";
import { user_logout } from "../../store/thunks/user_thunks";
const Navigation = () => {
  const { token } = useSelector((store) => store.user_reducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <div className="logo-container" onClick={() => navigate("/")}>
        Logo
      </div>

      <div className={`navlinks`}>
        {token && <p onClick={() => navigate("/carts")}>Carts</p>}
        {token ? (
          <p onClick={() => dispatch(user_logout())}>Logout</p>
        ) : (
          <p onClick={() => navigate("/login")}>Login</p>
        )}
        <p className="profile-wrapper">
          Profile <Avatar />
        </p>
      </div>
    </div>
  );
};

export default Navigation;
