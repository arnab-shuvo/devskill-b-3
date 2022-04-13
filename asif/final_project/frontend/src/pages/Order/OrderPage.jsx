import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  get_order_items,
  delete_customers_all_order,
  delete_customer_order,
} from "../../store/thunks/order_thunks";
import "./order_page_styles.css";
const OrderPage = () => {
  const dispatch = useDispatch();
  const { order_reducer, user_reducer } = useSelector((store) => store);
  const navigate = useNavigate();
  useEffect(() => {
    order_reducer.length == 0 && dispatch(get_order_items(navigate));
  }, []);
  return (
    <div className="order-page-container">
      {order_reducer.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Your Orders are {user_reducer?.user.order_status}</h1>
          <div className="order-list-wrapper">
            {order_reducer.map((order, index) => (
              <div className="order_list_item">
                <div className="left">
                  <div className="order-list-item-image">
                    <img src={order.image} alt={order.name} />
                  </div>
                  <div className="order-list-item-info">
                    <p>{order.name}</p>
                    <p>
                      <strong>quantity</strong> : {order.quantity}
                      <strong>price</strong> : {order.price}
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() =>
                    dispatch(delete_customer_order(index, order.id))
                  }
                  disabled={
                    user_reducer.user.order_status !== "pending" && false
                  }
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </div>
            ))}
            <Button
              onClick={() => dispatch(delete_customers_all_order(navigate))}
              variant="contained"
              color="secondary"
            >
              Delete All Order
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default OrderPage;
