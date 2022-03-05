import React from "react";
import "./navigation.css";
const Navigation = ({ onPageChange }) => {
  return (
    <div className="navigation">
      <div className="logo" onClick={() => onPageChange("home")}>
        Devskill E-Commerce
      </div>
      <div className="nav-link-container">
        <p onClick={() => onPageChange("create-product")}>Create Product</p>
      </div>
    </div>
  );
};

export default Navigation;
