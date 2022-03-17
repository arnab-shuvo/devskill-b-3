import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Loader";
import {
  DeleteProductAsync,
  GetProductAsync,
} from "../../services/ProductService";
import {ProductType} from "../../utilities/ProductType";

type IParams = {
  productId: string;
};

const ProductDetail: React.FC = () => {
  const { productId } = useParams<IParams>();
  const [product, setProduct] = useState<ProductType | null>(null);
  const naviagte = useNavigate();

  useEffect(() => {
    GetProductAsync(productId).then((x) => setProduct(x));
  }, []);

  return (
    <Container>
      {product ? (
        <Grid container justifyContent={"center"} marginTop={4}>
          <Grid item>
            <Grid item>
              <Card
                sx={{
                  width: "450px",
                }}
              >
                <CardHeader title="Product Detials" />
                <CardMedia
                  component={"img"}
                  height={200}
                  image={product.image}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{ maxWidth: "75%" }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    component="div"
                    sx={{
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    {product.price}$
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography>
                    <strong>Description: </strong> {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item marginTop={5}>
              <Button variant="contained" onClick={() => naviagte("/product")}>
                Back
              </Button>
              <Button
                variant="contained"
                color="error"
                sx={{ marginLeft: "1rem" }}
                onClick={() => {
                  DeleteProductAsync(product.id + "");
                  naviagte("/product");
                }}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginLeft: "1rem" }}
                onClick={() => naviagte(`/product/edit/${productId}`)}
              >
                Edit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default ProductDetail;
