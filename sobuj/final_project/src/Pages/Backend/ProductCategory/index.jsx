import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import Title from "../..";
  import Loader from "../../../loader";
  import { GetCategoryList } from "../../../utilis/API/Category";
  import { CategoryReadDto } from "../../../utilis/DTOs/Category";
  
  export default function Category() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<CategoryReadDto[]>(
      {} as CategoryReadDto[]
    );
  
    useEffect(() => {
      const fatchData = async () => {
        const data = await GetCategoryList();
        setCategories(data);
      };
      fatchData().catch(console.error);
    }, []);
  
    return (
      <React.Fragment>
        <Grid container justifyContent={"space-between"}>
          <Title>Product Category</Title>
          <Button
            variant="contained"
            onClick={() => navigate("/admin/category/create")}
          >
            Add Category
          </Button>
        </Grid>
        <Grid marginY={4} container justifyContent="center" xs={12} gap={3}>
          {categories.length ? (
            categories.map((value, index) => <CategoryCard category={value} />)
          ) : (
            <Loader />
          )}
        </Grid>
      </React.Fragment>
    );
  }
  
  type CategoryCardProps = {
    category: CategoryReadDto;
  };
  
  const CategoryCard = ({ category }: CategoryCardProps) => {
    return (
      <Grid xs={3}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {category.name}
            </Typography>
            <Typography variant="body2">{category.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Details</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };