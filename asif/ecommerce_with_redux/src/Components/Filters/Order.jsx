import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import useMethods from "../../utils/api";

const Order = () => {
  const [order, setOrder] = useState("");
  const { sort_product } = useMethods();
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Order-By</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={order}
        label="order-by"
        onChange={(e) => {
          sort_product(e.target.value);
          setOrder(e.target.value);
        }}
      >
        <MenuItem value="desc">desc</MenuItem>
        <MenuItem value="esc">esc</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Order;
