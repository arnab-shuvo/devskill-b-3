import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Header";

const PublicLayout: React.FC = ({ children }) => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    <Outlet />
  </React.Fragment>
);

export default PublicLayout;
