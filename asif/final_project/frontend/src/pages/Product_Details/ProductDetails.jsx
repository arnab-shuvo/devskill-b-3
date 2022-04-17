import React, { useState, useEffect } from "react";
import "./product_details.css";
import { useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import { BsCartFill } from "react-icons/bs";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import cogoToast from "cogo-toast";
import { add_carts } from "../../store/action_types";
const Product_Details = () => {
  const { product_id } = useParams();
  const dispatch = useDispatch();
  const { cart_reducer, user_reducer } = useSelector((state) => state);
  const [product, setProduct] = useState(null);

  //
  //
  const on_add_cart = async () => {
    const response = await axios.post(
      `http://localhost:8000/carts/create-cart?customer_id=${user_reducer.user?.id}`,
      {
        product_id,
        name: product.name,
        image: product.image,
        price: product.price,
      }
    );
    response.status == 200
      ? cogoToast.success(response.data.message) &&
        dispatch({
          type: add_carts,
          payload: { carts: [...cart_reducer, response.data.cart] },
        })
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
        <div className="product-details-wrapper">
          <h1>Product Details</h1>
          <div className="header">
            <h3>{product.name}</h3>
            <img alt={product.name} src={product.image} />
          </div>
          <div className="body">
            <h3>Description</h3>
            <p>{product.description}</p>
            <p>
              Category : <strong>{product.Category.name}</strong>
            </p>
            <p>Price : {product.price}৳</p>
          </div>
          {user_reducer.token && (
            <div className="footer">
              <p>
                <strong> Add To Cart : </strong>
              </p>
              <IconButton style={{ padding: ".5em" }} onClick={on_add_cart}>
                <BsCartFill />
              </IconButton>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Product_Details;

{
  /* <Grid container spacing={1} className="product-details-wrapper">
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
  {user_reducer.token && (
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
</Grid> */
}
