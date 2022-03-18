import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMethods from "../../utils/api";
import "./productDescription.css";
const ProductDescription = () => {
  const navigate = useNavigate();
  const { id, index } = useParams();
  const [product, setProduct] = useState(null);
  const { get_product, delete_product } = useMethods();

  useEffect(() => {
    const work = async () => {
      try {
        setProduct(await get_product(id));
      } catch (error) {
        return alert(error.message);
      }
    };
    work();
  }, [id]);
  return (
    <>
      {!product ? (
        <h3>Loading....</h3>
      ) : (
        <div className="product-description-page">
          <div className="back-button-container">
            <button onClick={() => navigate("/")} className="back-button">
              BACK TO HOME
            </button>
          </div>
          <div className="product-description-container">
            <div className="left">
              <h3>{product.title}</h3>
              <p>{product.category}</p>
              <div className="product-description-image">
                <img alt={product.title} src={product.image} />
              </div>
            </div>
            <div className="right">
              <div>
                <h4>Description</h4>
                <p>{product.description}</p>
              </div>
              <div className="action">
                <p>price : {product.price}</p>
                <button>Add to cart!</button>
              </div>
            </div>
          </div>
          <div className="product-description-footer">
            <button
              onClick={() => navigate(`/update-product/${product.id}/${index}`)}
              className="edit"
            >
              Edit
            </button>
            <button onClick={() => delete_product(id)} className="delete">
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDescription;
