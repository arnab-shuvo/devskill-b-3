import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React, { useState } from "react";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const CategoryFilter = ({ onSort }) => {
  const [category] = useState("");
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
        label="Category"
        onChange={(e) => onSort("Category", e.target.value)}
      >
        {categories.map((category) => (
          <MenuItem value={category}>{category}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
