import React, { useState } from "react";
import "./createProduct.css";
import useMethods from "../../utils/api";
import { useNavigate } from "react-router-dom";
const CreateProduct = ({ setProducts }) => {
  const { create_product } = useMethods();
  const navigate = useNavigate();
  const [value, setValue] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const onFieldChange = (field_name, val) => {
    setValue((prev_val) => {
      return {
        ...prev_val,
        [field_name]: val,
      };
    });
  };
  const onProductCreate = async (e) => {
    e.preventDefault();
    try {
      const new_product = await create_product(value);
      await setProducts((prev_products) => {
        return [...prev_products, new_product];
      });
      return navigate("/");
    } catch (error) {
      return alert(error.message);
    }
  };

  return (
    <div className="create-form-container">
      <h3>Create a new product!</h3>
      <form onSubmit={onProductCreate}>
        <div className="title-container">
          <label for="title">Title : </label>
          <input
            placeholder="title..."
            type="text"
            name="title"
            value={value.title}
            onChange={(e) => onFieldChange("title", e.target.value)}
          />
        </div>
        <div className="price-container">
          <label for="price">Price : </label>
          <input
            placeholder="price..."
            type="text"
            name="price"
            value={value.price}
            onChange={(e) => onFieldChange("price", e.target.value)}
          />
        </div>
        <div className="description-container">
          <label for="description">Description : </label>
          <input
            type="text"
            placeholder="description..."
            name="description"
            value={value.description}
            onChange={(e) => onFieldChange("description", e.target.value)}
          />
        </div>
        <div className="image-container">
          <label for="image">Image : </label>
          <div>
            <input
              type="file"
              name="image"
              value={value.image}
              onChange={(e) => onFieldChange("image", e.target.value)}
            />
          </div>
        </div>
        <div className="category-container">
          <label for="category">Category : </label>
          <input
            type="text"
            placeholder="category..."
            name="category"
            value={value.category}
            onChange={(e) => onFieldChange("category", e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
