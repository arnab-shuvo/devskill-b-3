import React, { useEffect, useState } from "react";
import useMethods from "../../utils/api";
import "./updateProduct.css";

const UpdateProduct = ({ product, setPage, setProducts, setProduct }) => {
  const [data, setData] = useState({ ...product.data });
  const { update_product } = useMethods();
  const onFieldChange = (field_name, value) => {
    setData((prev_data) => {
      return {
        ...prev_data,
        [field_name]: value,
      };
    });
  };
  const onUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const updated_product = await update_product(product.id, data);
      setProducts((prev_products) => {
        return [
          ...prev_products.slice(0, product.index),
          updated_product,
          ...prev_products.slice(product.index + 1),
        ];
      });
      setPage("home");
      setProduct({ data: null, index: null });
    } catch (error) {
      return alert(error.message);
    }
  };

  return (
    <div className="create-form-container">
      <h3>Update the product!</h3>
      <form onSubmit={onUpdateSubmit}>
        <div>
          <label for="title">Title : </label>
          <input
            name="title"
            type="text"
            value={data.title}
            onChange={(e) => onFieldChange("title", e.target.value)}
          />
        </div>
        <div>
          <label for="price">Price : </label>
          <input
            name="price"
            type="text"
            value={data.price}
            onChange={(e) => onFieldChange("price", e.target.value)}
          />
        </div>

        <div>
          <label for="description">Description : </label>
          <input
            name="description"
            type="text"
            value={data.description}
            onChange={(e) => onFieldChange("description", e.target.value)}
          />
        </div>

        <div>
          <label for="image">Image : </label>
          <div>
            <input
              name="image"
              type="file"
              onChange={(e) => onFieldChange("image", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label for="category">Category : </label>
          <input
            name="category"
            type="text"
            value={data.category}
            onChange={(e) => onFieldChange("category", e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProduct;
