import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import CustomLoaderEcomm from "../Loader/customLoader";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ProductDetails = () => {
  const [products, setProducts] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };
  const toEditProduct = (id) => {
    navigate(`/edit-product/${id}`);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        console.log(json);
      });
  }, [id]);

  return (
    <>
      <div className="container mx-auto mt-5">
        <h2 className="text-center">Product Details</h2>
        {/* <Container sx={{ mx: "auto" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item></Item>
          </Grid>
          <Grid item xs={6}>
          {products && (
            <Item>
              <Typography variant="h6" gutterBottom component="div">
                <b>Product Name: </b> {products.title}
              </Typography>
              <button onClick={() => showProductDetails(null)}>
                  Back To the List
                </button>
            </Item>
             )}
          </Grid>
        </Grid>
      </Container> */}
        <table className="mt-5 table table-striped table-hover table-bordered ">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Product Description</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Category</th>
              <th scope="col">Product Rating</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {products ? (
            <tbody>
              {products && (
                <tr>
                  <td>{products.title}</td>
                  <td>{products.description}</td>
                  <td>{products.price}</td>
                  <td>{products.category}</td>
                  <td>{products.rating.rate}</td>
                  <td>
                    <button onClick={() => toEditProduct(products.id)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={home}>Back To the List</button>
                  </td>
                </tr>
              )}
            </tbody>
          ) : (
            <CustomLoaderEcomm />
          )}
        </table>
      </div>
    </>
  );
};

export default ProductDetails;
