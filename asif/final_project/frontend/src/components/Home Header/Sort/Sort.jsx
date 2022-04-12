import React, { useState } from "react";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import "./sort_styles.css";
import axios from "axios";
const Sort = ({ page, setProducts }) => {
  const [sort, setSort] = useState(null);
  const on_sort_change = async (e) => {
    setSort(e.target.value);
    const response = await axios.get(
      `http://localhost:8000/products?p=${page}&order_by=${e.target.value}`
    );
    setProducts(response.data.products);
  };
  return (
    <div className="sort-container">
      <h3>Order By</h3>
      <FormControl className="sort" fullWidth>
        <InputLabel id="demo-simple-select-label">Order By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Order"
          onChange={on_sort_change}
        >
          <MenuItem value="asc">esc</MenuItem>
          <MenuItem value="desc">desc</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sort;
