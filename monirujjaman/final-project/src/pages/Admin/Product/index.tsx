import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Title from "../..";
import Product from "../../../components/Product";
import Loader from "../../../loader";
import { GetProductListAsync } from "../../../utilis/API/Product";
import { ProductReadDto } from "../../../utilis/DTOs/Product";

const ProductList = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState<ProductReadDto[]>(
    {} as ProductReadDto[]
  );

  useEffect(() => {
    const fatchData = async () => {
      const data = await GetProductListAsync();
      setProducts(data);
    };
    fatchData().catch(console.error);
  }, []);

  return (
    <React.Fragment>
      <Grid container justifyContent={"space-between"}>
        <Title>Products List</Title>
        <Button
          variant="contained"
          onClick={() => navigate("/admin/product/create")}
        >
          Add Product
        </Button>
      </Grid>
      <Grid marginTop={3} rowGap={3} container>
        {products.length ? (
          products.map((product, index) => (
            <Product product={product} key={index} />
          ))
        ) : (
          <Loader />
        )}
      </Grid>
    </React.Fragment>
  );
};

export default ProductList;
