import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React, { useState } from "react";
import useMethods from "../../utils/api";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const CategoryFilter = () => {
  const { get_product_by_category } = useMethods();
  const [category, setCategory] = useState("");
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="Category"
        onChange={(e) => {
          get_product_by_category(e.target.value);
          setCategory(e.target.value);
        }}
      >
        {categories.map((category) => (
          <MenuItem value={category}>{category}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
