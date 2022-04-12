import React, { useState, useEffect } from "react";
import "./product_details.css";
import { useParams } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";
import cogoToast from "cogo-toast";
const Product_Details = () => {
  const { product_id } = useParams();
  const user_data = useSelector((state) => state.user_reducer);
  const [product, setProduct] = useState(null);

  //
  //
  const on_add_cart = async () => {
    const response = await axios.post(
      `http://localhost:8000/carts/create-cart?product_id=${product?.id}&customer_id=${user_data.user?.id}&price=${product?.price}`
    );
    response.status == 200
      ? cogoToast.success(response.data.message)
      : cogoToast.warn("Cart already exist");
  };
  //
  //
  useEffect(() => {
    const get_product = async () => {
      const response = await axios.get(
        `http://localhost:8000/products/product/${product_id}`
      );
      setProduct(response.data.product);
    };
    get_product();
  }, [product_id]);
  return (
    <>
      {!product ? (
        <h1>Loading...</h1>
      ) : (
        <Grid container spacing={5} className="product-details-wrapper">
          <Grid container spacing={2} xs={12} sm={7} className="left">
            <Grid item xs={10} marginX="auto" component="h3">
              {product.name}
            </Grid>
            <Grid item xs={10} marginX="auto">
              <img
                src={product.image}
                alt={product.name}
                className="product-details-image"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5} className="right">
            <div>
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>
            <p>
              <strong>Category</strong> : {product.Category.name}
            </p>
            <p>
              <strong>Price</strong> : {product.price}
            </p>
            {user_data.token && (
              <div className="product-details-action">
                <p>
                  Add To Cart :
                  <Button
                    onClick={on_add_cart}
                    style={{
                      fontSize: "1.2rem",
                    }}
                  >
                    +
                  </Button>
                </p>
              </div>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default Product_Details;
