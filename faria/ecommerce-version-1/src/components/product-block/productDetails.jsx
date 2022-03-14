import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ProductDetails = ({ showProductDetails, productId, editProductDetails }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((result) => {
        setProductInfo(result);
        console.log(result);
      });
  }, [productId]);

  // console.log(productId);

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
          {productInfo && (
            <Item>
              <Typography variant="h6" gutterBottom component="div">
                <b>Product Name: </b> {productInfo.title}
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
        <tbody>
          {productInfo && (
            <tr>
              <td>{productInfo.title}</td>
              <td>{productInfo.description}</td>
              <td>{productInfo.price}</td>
              <td>{productInfo.category}</td>
              <td>{productInfo.rating.rate}</td>
              <td>
                <button onClick={() => editProductDetails(productId)}>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => showProductDetails(null)}>
                  Back To the List
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
   
  );
};

export default ProductDetails;
