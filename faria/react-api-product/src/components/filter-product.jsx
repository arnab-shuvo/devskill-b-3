import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterProduct = ({ setProducts, showCategory, categoryId }) => {
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("men's clothing");
  const [showLoader, setShowLoader] = useState(false);

  const viewCategory = (event) => {
    setShowLoader(true);
    setSelectCategory(event.target.value);
    console.log("This is event");
    console.log(event.target.value);
    setShowLoader(false);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${selectCategory}`)
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
      });
  }, [selectCategory]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((res) => res.json())
      .then((result) => {
        setCategories(result);
      });
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectCategory}
          label="Select Category"
          onChange={viewCategory}
        >
          {categories.map((category) => (
            <MenuItem value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterProduct;
