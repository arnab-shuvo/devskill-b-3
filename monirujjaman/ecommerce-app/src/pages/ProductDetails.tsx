import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { GetProductById } from "../utilities/api/ProductApi";
import IProduct from "../utilities/IProduct";

type ProductDetailsProps = {
    productId: number,
    back: () => void
}

const ProductDetails = ({productId, back} : ProductDetailsProps) => {
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    GetProductById(productId).then((r) => {
      setProduct(r);
      console.log(r);
    });
  }, []);

  return (
    <>
      {product ? (
        <Grid container justifyContent={'center'} alignItems='center' minHeight={'100vh'} direction='column'>
          <Grid item>
            <Card
              sx={{
                width: "450px",
              }}
            >
              <CardMedia component={"img"} height={200} image={product.image} />
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
          <Button variant='contained' onClick={() => back()}>Back</Button>
          </Grid>
        </Grid>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProductDetails;
