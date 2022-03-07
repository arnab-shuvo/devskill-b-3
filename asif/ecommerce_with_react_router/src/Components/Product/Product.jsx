import { Button, Card, CardContent, CardMedia } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
const Product = ({ product, index }) => {
  return (
    <Card className="product">
      <div className="product-info">
        <h3>{product.title.substr(0, 15)}...</h3>
        <p>{product.category}</p>
      </div>
      <CardMedia image={product.image} style={{ paddingTop: "100%" }} />
      <CardContent>
        <p>{product.description.substr(0, 15)} ... </p>
        <div className="card-content-footer">
          <p>{product.price}</p>
          <Button
            variant="contained"
            color="default"
            component={Link}
            to={`/product-description/${product.id}/${index}`}
          >
            Visit info...
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
