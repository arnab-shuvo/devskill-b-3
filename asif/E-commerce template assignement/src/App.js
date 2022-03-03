import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import ProductDescription from "./Pages/ProductDescription";
const App = () => {
  const [products, setProducts] = useState([]);
  const [onProduct, setOnProduct] = useState(null);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => alert(error.message));
  }, []);
  return (
    <div className="container">
      {onProduct ? (
        <ProductDescription
          product={onProduct}
          clearProduct={() => setOnProduct(null)}
        />
      ) : (
        <>
          {products.length === 0 ? (
            <div className="loading">Loading....</div>
          ) : (
            <>
              <Typography align="center" variant="h2" color="textSecondary">
                Products
              </Typography>
              <div className="product-list">
                {products.map((product) => (
                  <Card
                    className="product"
                    onClick={() => setOnProduct(product)}
                  >
                    <div className="product-info">
                      <h3>{product.title.slice(0, 15)}...</h3>
                      <p>{product.category}</p>
                    </div>
                    <CardMedia
                      image={product.image}
                      style={{ paddingTop: "100%" }}
                    />
                    <CardContent>
                      <p>{product.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;
