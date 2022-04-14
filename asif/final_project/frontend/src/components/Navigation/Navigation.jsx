import "./navigation_styles.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { user_logout } from "../../store/thunks/user_thunks";
const Navigation = () => {
  const { user_reducer } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <div className="logo-container" onClick={() => navigate("/")}>
        Logo
      </div>

      <div className={`navlinks`}>
        {user_reducer.token && <p onClick={() => navigate("/order")}>Order</p>}
        {user_reducer.token && <p onClick={() => navigate("/carts")}>Carts</p>}
        {user_reducer.token ? (
          <p onClick={() => dispatch(user_logout())}>Logout</p>
        ) : (
          <p onClick={() => navigate("/login")}>Login</p>
        )}
        {user_reducer.token && (
          <p className="profile-wrapper" onClick={() => navigate("/profile")}>
            Profile <Avatar />
          </p>
        )}
      </div>
    </div>
  );
};

export default Navigation;
