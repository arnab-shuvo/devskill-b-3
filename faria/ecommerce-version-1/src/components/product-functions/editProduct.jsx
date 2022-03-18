import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const EditProductPage = (editProductDetails, showProductDetails,  productId) => {
  const [product, setProduct] = useState([]);
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

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
        console.log(result);
      });
  }, [productId]);

  const editTask = (productId) => {
    setEdit(true);
    const toBeEdited = productList[productId];
    setEditedTask(toBeEdited);
    setToEdit(productId);
    console.log(productId);
  };
  const submitTask = () => {
    setEdit(false);
    const previousTask = [...productList];
    previousTask.splice(toEdit, 1, editedTask);
    setProductList(previousTask);
    setEditedTask("");
    setToEdit(null);
  };
  const setCategory = (event) => {
    setSelectCategory(event.target.value);
    console.log("This is event");
    console.log(event.target.value);
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >

        {edit && (
          <>
            <TextField
              // value={editedTask}
              defaultValue={product.title}
              onChange={(e) => setEditedTask(e.target.value)}
              id="outlined-basic"
              label="Product Name"
              variant="outlined"
            />

            <TextField
              // value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              id="outlined-number"
              type="number"
              error={error}
              helperText={error ? "not right." : ""}
              label="Product Price"
              defaultValue={product.price}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <InputLabel id="demo-simple-select-label">
              Select Category
            </InputLabel>

            {
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                defaultValue={product.category}
                value={selectCategory}
                label="Select Category"
                onChange={setCategory}
              >
                {productCategory.map((category) => (
                  <MenuItem value={category}>{category}</MenuItem>
                ))}
              </Select>
            }

            <TextField
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              error={error}
              helperText={error ? "not right." : ""}
              id="outlined-basic"
              label="Product Description"
              defaultValue={product.description}
              variant="outlined"
            />
            <button
              sx={{

              }}
              variant="outlined"
              component="label"
            >
              Upload Image
              <input type="file" />
            </button>

            <IconButton
              onClick={() => submitTask()}
              aria-label="upload picture"
              component="span"
            >
              Update
              <AddCircleOutlineIcon
                style={{ color: "#eead0e", width: "40px" }}
              />
            </IconButton>
          </>
        )}
        {productList.map((product, productId) => {
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
                <button onClick={() => editTask(productId)}>Edit</button>
                {message}
              </li>
            </ul>
          );
        })}
      </Box>
    </>
  );
};

export default EditProductPage;
