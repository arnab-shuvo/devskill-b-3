import React from "react";
import { useState } from "react";
import { get_orders_by_status } from "../../../store/thunks/owner_thunk";
import OrderFilter from "../../OrderFilter/OrderFilter";
import OwnerOrder from "../../owner-orders/OwnerOrder";
import "./owner_order_list_styles.css";

const OwnerOrderList = () => {
  const [orders, setOrders] = useState([]);
  const on_delete_order = (index) => {
    setOrders((prev_orders) => [
      ...prev_orders.slice(0, index),
      ...prev_orders.slice(index + 1),
    ]);
  };
  const on_order_change = async (order_status) => {
    setOrders(await get_orders_by_status(order_status));
  };
  console.log("here");
  return (
    <div className="order-list-container">
      <div className="owner-order-list-header">
        <h1>All orders</h1>
        <OrderFilter on_order_change={on_order_change} />
      </div>
      <div className="order-list">
        {orders.length === 0 ? (
          <h1>No orders</h1>
        ) : (
          orders.map((item, index) => (
            <OwnerOrder
              order={item}
              index={index}
              on_delete_order={on_delete_order}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default OwnerOrderList;
