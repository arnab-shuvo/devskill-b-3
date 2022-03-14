import React from "react";
import useMethods from "../../utils/api";
import "./productDescription.css";
const ProductDescription = ({ onPageChange, product, setProducts }) => {
  const { delete_product } = useMethods();
  const on_delete = async () => {
    const id = await delete_product(product.data.id);
    setProducts((prev_products) => {
      return [...prev_products.filter((item) => item.id != id)];
    });
    onPageChange("home");
  };
  return (
    <div className="product-description-page">
      <div className="back-button-container">
        <button onClick={() => onPageChange("home")} className="back-button">
          BACK TO HOME
        </button>
      </div>
      <div className="product-description-container">
        <div className="left">
          <h3>{product.data.title}</h3>
          <p>{product.data.category}</p>
          <div className="product-description-image">
            <img alt={product.data.title} src={product.data.image} />
          </div>
        </div>
        <div className="right">
          <div>
            <h4>Description</h4>
            <p>{product.data.description}</p>
          </div>
          <div className="action">
            <p>price : {product.data.price}</p>
            <button>Add to cart!</button>
          </div>
        </div>
      </div>
      <div className="product-description-footer">
        <button onClick={() => onPageChange("update-product")} className="edit">
          Edit
        </button>
        <button onClick={on_delete} className="delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
