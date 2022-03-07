import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import IProduct from "../utilities/IProduct";

type ProductProps = {
    product: IProduct,
    showDetials: (productId: number) => void
}

const Product = ({product, showDetials}: ProductProps) => {
  return (
    <Grid item>
      <Card
        sx={{
          width: "350px",
        }}
        onClick={() => showDetials(product.id)}
      >
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
          <Typography component="div" variant="h6"
          sx={{maxWidth: '75%'}}>
            {product.title.slice(0,20)}...
          </Typography>
          <Typography
            component="div"
            sx={{
              fontWeight: "bold",
              color: "red"
            }}
          >
            {product.price}$
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
