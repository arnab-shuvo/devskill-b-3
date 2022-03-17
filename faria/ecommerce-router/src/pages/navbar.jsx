import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import rightImg from "../images/Rectangle238.png";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import "./layout.css";

const Navbar = () => {
  //   const navigate = useNavigate();

  //   const toCreateProduct = () => {
  //     navigate("/create-product");
  //   };

  return (
    <>
      <div className="navigation-fluid">
        <Container>
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                fontSize: "1.25rem",
                fontWeight: "500",
                color: "#0A1929",
                width: "30%",
                justifyContent: "space-between",
              }}
            >
                <ul className="navbar-layout">
                <li
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  minWidth: 100,
                  textDecoration: "none",
                }}
              >
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  minWidth: 100,
                  textDecoration: "none",
                }}
              >
                <NavLink
                  sx={{ fontSize: "1.25rem", fontWeight: "500", minWidth: 100 }}
                  to={"/create-product"}
                >
                  Add Product
                </NavLink>
              </li>
              <li
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  minWidth: 100,
                  textDecoration: "none",
                }}
              >
                <NavLink
                  sx={{ fontSize: "1.25rem", fontWeight: "500", minWidth: 100 }}
                  to={"/all-products"}
                >
                  All Products
                </NavLink>
              </li>
                </ul>
              
            </Box>
          </React.Fragment>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
