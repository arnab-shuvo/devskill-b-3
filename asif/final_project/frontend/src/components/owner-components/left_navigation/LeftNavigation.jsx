import React from "react";
import "./left_navigation_styles.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { BiCategoryAlt, BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const LeftNavigation = () => {
  const navigate = useNavigate();
  return (
    <div className="left-navigation">
      <div className="bar">
        <BsFillCartCheckFill />
        <p onClick={() => navigate("/owner-dashboard/order-list")}>Orders</p>
      </div>
      <div className="bar">
        <GiClothes />
        <p onClick={() => navigate("/owner-dashboard/products")}>Products</p>
      </div>
      <div className="bar">
        <BiCategoryAlt />
        <p onClick={() => navigate("/owner-dashboard/categories")}>Category</p>
      </div>
      <div className="bar">
        <BiUser />
        <p onClick={() => navigate("/owner-dashboard/all-customer-list")}>
          Customers
        </p>
      </div>
    </div>
  );
};

export default LeftNavigation;
