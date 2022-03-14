import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  // const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productList, setProductList] = useState([]);
  const [message, setMessage] = useState("");
  const [productCategory, setProductCategory] = useState([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);
  const [selectCategory, setSelectCategory] = useState("men's clothing");
  const [error, setError] = useState(false);
  const addNewProduct = () => {
    if (
      productName.length &&
      productPrice.length &&
      productCategory.length &&
      productDescription.length
    ) {
      const newproduct = {
        title: productName,
        price: parseFloat(productPrice),
        description: productDescription,
        image: "https://i.pravatar.cc",
        category: selectCategory,
      };

      console.log(newproduct);
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(newproduct),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));

      // setMessage(newproduct);
    } else {
      setError(true);
    }
  };
  const setCategory = (event) => {
    setSelectCategory(event.target.value);
    console.log("This is event");
    console.log(event.target.value);
  };
  const setName = (e) => {
    setProductName(e.target.value);
    setError(false);
  };
  const setPrice = (e) => {
    setProductPrice(e.target.value);
    setError(false);
  };
  const setDescription = (e) => {
    setProductDescription(e.target.value);
    setError(false);
  };
  return (
    <Container sx={{ mx: "auto" }}>
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{
          mx: "auto",
          textAlign: "center",
          fontSize: "35px",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        Create New Product
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 4,
            width: "80%",
            display: "flex",
            
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={productName}
          onChange={(e) => setName(e)}
          id="outlined-basic"
          error={error}
          helperText={error ? "not right." : ""}
          label="Product Name"
          variant="outlined"
        />

        <TextField
          value={productPrice}
          onChange={(e) => setPrice(e)}
          id="outlined-number"
          type="number"
          error={error}
          helperText={error ? "not right." : ""}
          label="Product Price"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectCategory}
          label="Select Category"
          onChange={setCategory}
        >
          {productCategory.map((category) => (
            <MenuItem value={category}>{category}</MenuItem>
          ))}
        </Select>

        <TextField
          value={productDescription}
          onChange={(e) => setDescription(e)}
          error={error}
          helperText={error ? "not right." : ""}
          id="outlined-basic"
          label="Product Description"
          variant="outlined"
        />
        <IconButton
          onClick={addNewProduct}
          aria-label="upload picture"
          component="span"
          sx={{
            display: "flex",
            justifyContent: "start",

            width: "17%",
            padding: "1rem",
            fontSize: "18px",
            color: "#2b2b2b",
            background: "#FFBB00",
            borderRadius: "6px",
          }}
        >
          <AddCircleOutlineIcon style={{ color: "#2b2b2b", width: "40px" }} />{" "}
          Add Product
        </IconButton>
        {productList.map((product) => {
          return (
            <ul>
              <li
                style={{
                  textAlign: "center",
                  padding: "20px",
                  listStyle: "none",
                }}
              >
                {product}
                {/* <button onClick={editTask}></button> */}
                {message}
              </li>
            </ul>
          );
        })}
      </Box>
    </Container>
  );
};

export default CreateProduct;
