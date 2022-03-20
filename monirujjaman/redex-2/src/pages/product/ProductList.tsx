import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../../components/product/Product";
import Loader from "../../Loader";
import { useProductDispatch } from "../../store";

const ProductList = () => {
  const navigate = useNavigate();
  const { actions, products } = useProductDispatch();
  const { GetAllProducts } = actions;
  useEffect(() => {
    const feathData = async () => {
      await GetAllProducts();
    };
    feathData().catch(console.error);
  }, []);

  return (
    <Container>
      {products ? (
        <Grid marginY={6} container justifyContent={"center"} gap={3}>
          {products.map((v, i) => (
            <Product
              product={v}
              key={i}
              detail={(productId: string) => navigate(`/product/${productId}`)}
            />
          ))}
        </Grid>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default ProductList;
