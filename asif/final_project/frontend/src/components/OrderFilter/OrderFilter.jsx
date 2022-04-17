import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import "./order_filter_styles.css";

const order_types = ["pending", "accepted"];

const OrderFilter = ({ on_order_change }) => {
  const [order, setOrder] = useState("");
  const order_change = (e) => {
    setOrder(e.target.value);
    on_order_change(e.target.value);
  };
  console.log("in filter");
  return (
    <div className="order-filter-container">
      <FormControl className="filter">
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Category"
          onChange={order_change}
        >
          {order_types.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default OrderFilter;
