import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const EditProductPage = (editProductList) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
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
  const [edit, setEdit] = useState(false);
  const [editedTask, setEditedTask] = useState("");
  const [toEdit, setToEdit] = useState(null);

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

      fetch("https://fakestoreapi.com/products/7", {
        method: "PUT",
        body: JSON.stringify(newproduct)({
          title: "test product",
          price: 13.5,
          description: "lorem ipsum set",
          image: "https://i.pravatar.cc",
          category: "electronic",
        }),
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

  const deleteTask = (index) => {
    // const deleteItemArray = [...productList];
    // const getIndex = deleteItemArray.indexOf(index);
    // if (getIndex !== -1) {
    //   deleteItemArray.splice(getIndex, 1);
    //   setProductList(deleteItemArray);
    // }
    const previousTask = [...productList];
    previousTask.splice(index, 1);
    setProductList(previousTask);
  };
  const editTask = (index) => {
    setEdit(true);
    const toBeEdited = productList[index];
    setEditedTask(toBeEdited);
    setToEdit(index);
  };
  const submitTask = () => {
    setEdit(false);
    const previousTask = [...productList];
    previousTask.splice(toEdit, 1, editedTask);
    setProductList(previousTask);
    setEditedTask("");
    setToEdit(null);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
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
      >
        <AddCircleOutlineIcon style={{ color: "#eead0e", width: "40px" }} />
      </IconButton>
      {/* Edit section */}
      {edit && (
        <>
          <TextField
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
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
            onClick={submitTask}
            aria-label="upload picture"
            component="span"
          >
            <AddCircleOutlineIcon style={{ color: "#eead0e", width: "40px" }} />
          </IconButton>
        </>
      )}

      {productList.map((product, index) => {
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
              <button onClick={() => editTask(index)}>Edit</button>
              {message}
            </li>
          </ul>
        );
      })}
    </Box>
  );
};

export default EditProductPage;
