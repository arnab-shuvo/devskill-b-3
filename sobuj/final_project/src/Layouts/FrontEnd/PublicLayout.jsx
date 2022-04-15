import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const PublicLayout = ({ children }) => (
  <React.Fragment>
    {/* <CssBaseline /> */}
    {/* <Navbar /> */}
    <Outlet />
  </React.Fragment>
);

export default PublicLayout;