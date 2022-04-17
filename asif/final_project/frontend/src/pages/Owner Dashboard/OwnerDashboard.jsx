import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import LeftNavigation from "../../components/owner-components/left_navigation/LeftNavigation";
import OwnerOrderList from "../../components/owner-components/order-lists/OwnerOrderList";
import "./owner_dashboard_styles.css";

const OwnerDashboard = () => {
  const location = useLocation();
  return (
    <div className="owner-dashboard">
      <LeftNavigation />
      {location.pathname == "/owner-dashboard" ? (
        <OwnerOrderList />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default OwnerDashboard;
