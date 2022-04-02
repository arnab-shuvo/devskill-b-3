import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Product: React.FC = () => {
  return (
    <Grid item xs={3} sm={4} md={4}>
      <Card sx={{ maxWidth: 300, maxHeight: 600 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image="https://static-01.daraz.com.bd/p/fbec7596d90696f452cdba12d5bcca59.jpg"
            alt="T-Shart"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              Product Title
            </Typography>
            <Typography
              sx={{ marginTop: "20px" }}
              variant="h5"
              color="text.secondary"
            >
              ৳ 600
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Product;
