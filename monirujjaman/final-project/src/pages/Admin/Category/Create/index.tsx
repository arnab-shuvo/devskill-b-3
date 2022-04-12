import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Title from "../../..";
import Notification, { NotificationType } from "../../../../Notification";
import { useUserDispatch } from "../../../../store/action-dispatchs";
import { CreateProductCategory } from "../../../../utilis/API/Category";
import { CategoryCreateDto } from "../../../../utilis/DTOs/Category";

type Inputs = {
  name: string;
  description: string;
};

const CategoryCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const { user, GetUserInfo } = useUserDispatch();

  useEffect(() => {
    GetUserInfo();
  }, []);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const category: CategoryCreateDto = {
      name: data.name,
      description: data.description,
    };

    try {
      await CreateProductCategory(user.token ?? "", category);
      Notification(NotificationType.success, "Product created successfully.");
    } catch (error) {
      Notification(NotificationType.error, "Product created failed.");
    }
    reset();
  };

  return (
    <React.Fragment>
      <Title>Create Product Category</Title>
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
              error={errors.name ? true : false}
              fullWidth
              label="Category Name"
              autoComplete="name"
              autoFocus
              {...register("name", {
                required: "Please provide category name",
              })}
            />
            <Typography color={"red"}>{errors.name?.message}</Typography>
            <TextField
              margin="normal"
              error={errors.description ? true : false}
              fullWidth
              label="Category Description"
              autoComplete="description"
              autoFocus
              multiline
              rows={4}
              {...register("description", {
                required: "Please provide description",
              })}
            />
            <Typography color={"red"}>{errors.description?.message}</Typography>
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
    </React.Fragment>
  );
};

export default CategoryCreate;
