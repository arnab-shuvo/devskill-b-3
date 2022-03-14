import { Container, Grid } from "@mui/material";
import { useState } from "react";
import Product from "../components/Product";
import IProduct from "../utilities/IProduct";
import ProductDetails from "./ProductDetails";

type ProductListProps = {
  products: IProduct[];
};

const ProductList = ({ products }: ProductListProps) => {
  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState(1);

  const ShowProductDetails = (productId: number) => {
    setProductId(productId);
    setShow(true);
  };

  return (
    <Container maxWidth="lg">
      {show ? (
        <ProductDetails productId={productId} back={() => setShow(false)} />
      ) : (
        <Grid marginY={6} container justifyContent={"center"} gap={3}>
          {products.map((v, i) => (
            <Product
              product={v}
              key={i}
              showDetials={(productId: number) => ShowProductDetails(productId)}
            />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProductList;
