import { Button } from "@mui/material";
import React from "react";
import "./owner_order_styles.css";
import { delete_customers_order } from "../../store/thunks/owner_thunk";
import cogoToast from "cogo-toast";
const OwnerOrder = ({ order, on_delete_order, index }) => {
  const delete_handler = async (order_status) => {
    const deleted = await delete_customers_order(order.id, order_status);
    deleted ? on_delete_order(index) : cogoToast.warn("cant delete the order");
  };
  console.log("in order item");
  return (
    <div className="order-item" key={order.id}>
      <img src={order.image} alt={order.name} />
      <h1>{order.name}</h1>
      <div className="items">
        {order.Order.map((product) => (
          <div className="product">
            <p>{product.name}</p>
            <p>Quantity : {product.quantity}</p>
          </div>
        ))}
      </div>
      {order.order_status == "pending" && (
        <>
          <Button
            onClick={() => delete_handler("rejected")}
            color="error"
            variant="outlined"
          >
            Reject
          </Button>
          <Button
            onClick={() => delete_handler("accepted")}
            color="primary"
            variant="contained"
          >
            Accept
          </Button>
        </>
      )}
    </div>
  );
};

export default OwnerOrder;
