import "./navigation_styles.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { user_logout } from "../../store/thunks/user_thunks";
import { owner_logout } from "../../store/thunks/owner_thunk";

const Navigation = () => {
  const { user_reducer, owner_reducer } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navigation">
      <div
        className="logo-container"
        onClick={() =>
          owner_reducer.token ? navigate("/owner-dashboard") : navigate("/")
        }
      >
        <img
          alt={"null"}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj71d6DhZSx0tIzdNZG_zPWnc2t665OQWyUpCXZkOlF2HTVmOtaRseLolWnPIe1ZKoQOo&usqp=CAU"
        />
      </div>

      <div className={`navlinks`}>
        {user_reducer.token && <p onClick={() => navigate("/order")}>Order</p>}
        {user_reducer.token && <p onClick={() => navigate("/carts")}>Carts</p>}
        {user_reducer.token ? (
          <p onClick={() => dispatch(user_logout(navigate))}>Logout</p>
        ) : (
          location.pathname != "/login" &&
          !owner_reducer.token && (
            <p onClick={() => navigate("/login")}>Login</p>
          )
        )}

        {user_reducer.token && (
          <p className="profile-wrapper" onClick={() => navigate("/profile")}>
            Profile <Avatar />
          </p>
        )}
        {owner_reducer.token && (
          <p onClick={() => dispatch(owner_logout(navigate))}>Logout</p>
        )}
      </div>
    </div>
  );
};

export default Navigation;
