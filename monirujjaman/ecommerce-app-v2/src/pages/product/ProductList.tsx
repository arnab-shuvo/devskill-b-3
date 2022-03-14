import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../../components/product/Product";
import Loader from "../../Loader";
import { GetProductsAsync } from "../../services/ProductService";
import IProduct from "../../utilities/IProduct";

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    GetProductsAsync().then((x) => setProducts(x));
  }, []);

  return (
    <Container>
      {products ? (
        <Grid marginY={6} container justifyContent={"center"} gap={3}>
          {products.map((v, i) => (
            <Product product={v} key={i} detail={(productId: string) => navigate(`/product/${productId}`)}/>
          ))}
        </Grid>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default ProductList;
