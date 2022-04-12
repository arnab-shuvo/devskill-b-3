import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SignIn from "../../../pages/Signin";
import { useUserDispatch } from "../../../store/action-dispatchs";
import Header from "../../Header";

const UserLayout: React.FC = () => {
  const { user } = useUserDispatch();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      {user.authorized ? <Outlet /> : <SignIn />}
    </React.Fragment>
  );
};
export default UserLayout;
