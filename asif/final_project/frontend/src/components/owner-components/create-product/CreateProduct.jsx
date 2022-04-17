import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import React from "react";
import { useState } from "react";

import { create_product } from "../../../store/thunks/owner_thunk";
import "./create_product_styles.css";
const categories = [
  { id: 1, name: "gents" },
  { id: 2, name: "ladies" },
  { id: 3, name: "watch" },
  { id: 4, name: "shoes" },
  { id: 5, name: "glass" },
];
const CreateProduct = ({ set_creating_post }) => {
  const [category_name, set_category_name] = useState("");
  const [data, setData] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category_id: "",
  });

  const on_field_change = (e) =>
    setData((prev_data) => ({ ...prev_data, [e.target.name]: e.target.value }));
  return (
    <div className="create-product-container">
      <h1>Create Product</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          create_product(data, set_creating_post);
        }}
      >
        <div>
          <label for="name">Name</label>
          <input
            onChange={on_field_change}
            name="name"
            type="text"
            value={data.name}
          />
        </div>

        <div>
          <label for="image">Image</label>
          <input
            onChange={on_field_change}
            name="image"
            type="file"
            value={data.image}
          />
        </div>

        <div>
          <label for="description">Description</label>
          <input
            onChange={on_field_change}
            name="description"
            type="text"
            value={data.description}
          />
        </div>

        <div>
          <label for="price">Price</label>
          <input
            onChange={on_field_change}
            name="price"
            type="text"
            value={data.price}
          />
        </div>
        <FormControl className="filter">
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category_name}
            label="Category"
            onChange={(e) => set_category_name(e.target.value)}
          >
            {categories.map((item) => (
              <MenuItem
                onClick={() =>
                  setData((prev_data) => ({
                    ...prev_data,
                    category_id: item.id,
                  }))
                }
                value={item.name}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit" color="primary" variant="contained">
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateProduct;
