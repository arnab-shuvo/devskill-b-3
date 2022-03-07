import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navigation.css";
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="navigation">
      <div className="logo">
        <Link to="/">Devskill E-Commerce</Link>
      </div>
      <div className="nav-link-container">
        <Link to="/create-product">Create Product</Link>
      </div>
    </div>
  );
};

export default Navigation;
