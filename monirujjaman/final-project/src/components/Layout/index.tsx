import { CssBaseline } from "@mui/material";
import React from "react";
import Header from "../Header";

const Layout: React.FC = ({ children }) => (
  <React.Fragment>
    <CssBaseline />
    <Header />
    {children}
  </React.Fragment>
);

export default Layout;
