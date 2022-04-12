import React, { useState } from "react";
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";
import "./filter.css";
import axios from "axios";
const categories = ["Gents", "Ladies", "Watch", "Shoes", "Glass"];

const Filter = ({ setProducts }) => {
  const [category, setCategory] = useState(null);
  const on_category_change = async (e) => {
    setCategory(e.target.value);
    const response = await axios.get(
      `http://localhost:8000/category/category-products?category_id=${e.target.value}`
    );
    setProducts(response.data.category.Product);
  };

  return (
    <div className="filter-container">
      <h3>Category</h3>
      <FormControl className="filter" fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={on_category_change}
        >
          {categories.map((item, index) => (
            <MenuItem onClick={() => setCategory(item)} value={index + 1}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
