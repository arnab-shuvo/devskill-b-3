import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Login from "../../Components/Login";
// import { useUserDispatch } from "../../../store/action-dispatchs";
import Navbar from "../../Components/Navbar";

const UserLayout = () => {
  // const { user } = useUserDispatch();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Navbar /> */}
      {/* {user.authorized ? <Outlet /> : <Login />} */}
      <h3>This is Dashboard</h3>
    </React.Fragment>
  );
};
export default UserLayout;