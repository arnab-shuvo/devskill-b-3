import { Button, Card, Container, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader";
import { CreateProduct } from "../../services/ProductService";
import { ProductType } from "../../utilities/ProductType";

const CreateNewProduct = () => {
  const [product, setProduct] = useState<ProductType>({} as ProductType);
  const naviagte = useNavigate();

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = { ...product };
    let files = e.target.files;
    let reader = new FileReader();
    if (files !== null) reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      if(e.target?.result?.toString() !== undefined)
      data.image = e.target?.result?.toString();
      setProduct(data as ProductType);
    };
  };

  const onChangeTitle = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const data = { ...product };
    data.title = e.target.value;
    setProduct(data as ProductType);
  };

  const onChangeDescription = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const data = { ...product };
    data.description = e.target.value;
    setProduct(data as ProductType);
  };

  const onChangePrice = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.target.value !== "") {
      const data = { ...product };
      data.price = Number(e.target.value);
      setProduct(data as ProductType);
    }
  };
  return (
    <Container>
      {product ? (
        <Grid container justifyContent={"center"} marginTop={5}>
          <Grid item>
            <Card sx={{ width: "530px", padding: "30px" }}>
              <Box component={"form"} noValidate autoComplete="off">
                <TextField
                  sx={{ marginRight: "20px" }}
                  label="Title"
                  defaultValue={product?.title}
                  onChange={(e) => onChangeTitle(e)}
                />
                <TextField
                  label="Price"
                  defaultValue={product?.price}
                  onChange={(e) => onChangePrice(e)}
                />
                <br />
                <TextField
                  sx={{ marginTop: "20px", width: "465px" }}
                  label="Description"
                  multiline
                  maxRows={3}
                  defaultValue={product?.description}
                  onChange={(e) => onChangeDescription(e)}
                />
                <br />
                <br />
                <input
                  type="file"
                  onChange={(e) => uploadImage(e)}
                  accept="image/*"
                />
                <br />
                <br />
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ marginRight: "30px" }}
                  onClick={() => naviagte('/')}
                >
                  Cancle
                </Button>
                <Button
                  variant="contained"
                >
                  Save
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default CreateNewProduct;
