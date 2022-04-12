import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Title from "../../..";
import Loader from "../../../../loader";
import Notification, { NotificationType } from "../../../../Notification";
import { useUserDispatch } from "../../../../store/action-dispatchs";
import { GetCategoryList } from "../../../../utilis/API/Category";
import { CreateProductAsync } from "../../../../utilis/API/Product";
import FileToBase64 from "../../../../utilis/common/FileToBase64";
import { CategoryReadDto } from "../../../../utilis/DTOs/Category";
import { ProductCreateDto } from "../../../../utilis/DTOs/Product";

type Inputs = {
  title: string;
  price: number;
  description: string;
  image: FileList;
  stock: number;
  category: string;
};

const Input = styled("input")({
  display: "none",
});

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const [categories, setCategories] = useState<CategoryReadDto[]>(
    {} as CategoryReadDto[]
  );

  const { user, GetUserInfo } = useUserDispatch();

  useEffect(() => {
    GetUserInfo();
    const fetchData = async () => {
      const data = await GetCategoryList();
      setCategories(data);
    };

    fetchData().catch(console.error);
  }, []);

  // console.log(errors);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const image = await FileToBase64(data.image[0]);
    const product: ProductCreateDto = {
      title: data.title,
      price: data.price,
      description: data.description,
      image: image,
      stock: data.stock,
      category: {
        _id: data.category,
      },
    };

    try {
      await CreateProductAsync(user.token ?? "", product);
      Notification(NotificationType.success, "Product created successfully");
      reset();
    } catch (error) {
      Notification(NotificationType.error, "Product created failed");
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Title>Create Product</Title>
      {categories.length > 0 ? (
        <Grid container justifyContent={"center"}>
          <Box
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              minWidth="400px"
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                margin="normal"
                error={errors.title ? true : false}
                fullWidth
                label="Product Title"
                autoComplete="title"
                autoFocus
                {...register("title", {
                  required: "Please provide product title",
                })}
                helperText={errors.title ? errors.title.message : ""}
              />
              <TextField
                margin="normal"
                error={errors.price ? true : false}
                fullWidth
                label="Product Price"
                autoComplete="price"
                type={"number"}
                autoFocus
                {...register("price", {
                  required: "Please provide product price",
                  valueAsNumber: true,
                })}
                helperText={errors.price ? errors.price.message : ""}
              />
              <TextField
                margin="normal"
                error={errors.stock ? true : false}
                fullWidth
                label="Product Stock"
                autoComplete="stock"
                autoFocus
                type={"number"}
                {...register("stock", {
                  required: "Please provide product stock",
                  valueAsNumber: true,
                })}
                helperText={errors.stock ? errors.stock.message : ""}
              />
              <TextField
                margin="normal"
                error={errors.description ? true : false}
                fullWidth
                label="Product Description"
                autoComplete="description"
                autoFocus
                multiline
                rows={4}
                {...register("description", {
                  required: "Please provide product description",
                })}
                helperText={
                  errors.description ? errors.description.message : ""
                }
              />
              <FormControl
                fullWidth
                sx={{ mt: 2, minWidth: 200 }}
                error={errors.category ? true : false}
              >
                <InputLabel id="demo-simple-select-error-label">
                  Product Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-error-label"
                  id="demo-simple-select-error"
                  label="Age"
                  {...register("category", {
                    required: "Please select product category",
                  })}
                  defaultValue=""
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {categories.map((value, index) => (
                    <MenuItem value={`${value._id}`} key={index}>
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {errors?.category ? errors.category.message : ""}
                </FormHelperText>
              </FormControl>
              <Typography sx={{ marginTop: 2 }}>
                Upload Product Image
              </Typography>
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  {...register("image", {
                    required: "Please provide product image",
                  })}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
              <Typography sx={{ marginTop: 2 }} color="red">
                {errors.image ? errors.image.message : ""}
              </Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Grid>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

export default CreateProduct;
