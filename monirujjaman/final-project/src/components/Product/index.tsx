import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import BaseUrl from "../../utilis/API";
import { ProductReadDto } from "../../utilis/DTOs/Product";

type ProductProps = {
  product: ProductReadDto;
};

const Product: React.FC<ProductProps> = ({ product }: ProductProps) => {
  const image = `${BaseUrl}${product.image}`;
  return (
    <Grid item xs={3} sm={4} md={4}>
      <Card sx={{ maxWidth: 300, maxHeight: 600 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={image}
            alt={product.title}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {product.title}
            </Typography>
            <Typography
              sx={{ marginTop: "20px" }}
              variant="h5"
              color="text.secondary"
            >
              ৳ {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Product;
