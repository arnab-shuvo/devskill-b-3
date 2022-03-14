import { Button, Card, Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import IProduct from '../../utilities/IProduct';
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Loader";
import { useEffect, useState } from "react";
import { GetProductAsync } from "../../services/ProductService";

type IParams = {
    productId: string;
};

const EditProduct = () => {
    const { productId } = useParams<IParams>();
    const [product, setProduct] = useState<IProduct | null>(null);
    const naviagte = useNavigate();

    useEffect(() => {
        GetProductAsync(productId).then(x => setProduct(x));
    }, []);

  return (
    <Container>
      <Grid container justifyContent={"center"} marginTop={5}>
        <Grid item>
          <Card sx={{ width: "530px", padding: "30px" }}>
            <Box component={"form"} noValidate autoComplete="off">
              <TextField sx={{ marginRight: "20px" }} label="Title" />
              <TextField label="Price" />
              <br />
              <TextField
                sx={{ marginTop: "20px", width: "465px" }}
                label="Description"
                multiline
                maxRows={3}
              />
              <br />
              <br />
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginRight: "30px" }}
                onClick={() => naviagte(`/product/${productId}`)}
              >
                Cancle
              </Button>
              <Button variant="contained">Save</Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditProduct;
