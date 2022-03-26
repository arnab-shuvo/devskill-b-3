import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate, useParams } from "react-router-dom";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const EditProduct = () => {
  const [productCategory, setProductCategory] = useState([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);
  const [selectCategory, setSelectCategory] = useState("men's clothing");

  const [products, setProducts] = useState(null);
  const [newProduct, setNewProduct] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const todetailsProduct = (id) => {
    navigate(`/product-details/${id}`);
  };
  const toHome = () => {
    navigate("/");
  };

  const setCategory = (event) => {
    setSelectCategory(event.target.value);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        // setProducts(json);
        console.log(json);
      });

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        console.log(json);
      });
  }, []);

  return (
    <>
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
          Edit Product
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 4, width: "80%", display: "flex" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            defaultValue={products?.title}
            //   value={products?.title}
            // onChange={(e)=>{setProducts(e.target.value)}}
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
          />

          <TextField
            id="outlined-number"
            type="number"
            label="Product Price"
            defaultValue={products?.price}
            //   onChange={(e)=>{setProducts(e.target.value)}}
            //   value={products?.price}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <InputLabel id="demo-simple-select-label">Select Category</InputLabel>

          {
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={products?.selectCategory}
              // value={products?.selectCategory}
              // onChange={(e)=>{setProducts(e.target.value)}}
              label="Select Category"
              onChange={setCategory}
            >
              {productCategory.map((category) => (
                <MenuItem value={category}>{category}</MenuItem>
              ))}
            </Select>
          }

          <TextField
            id="outlined-basic"
            label="Product Description"
            //   value={products?.description}
            defaultValue={products?.description}
            onChange={(e) => {
              setProducts(e.target.value);
            }}
            variant="outlined"
          />
          <button
            sx={{
              width: "50%",
              padding: "30px",
            }}
            variant="outlined"
            component="label"
          >
            Upload Image
            <input type="file" />
          </button>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              onClick={todetailsProduct}
              aria-label="upload picture"
              component="span"
              sx={{
                padding: "1rem",
                fontSize: "18px",
                color: "#2b2b2b",
                background: "#FFBB00",
                borderRadius: "6px",
              }}
            >
              {" "}
              <AddCircleOutlineIcon
                style={{ color: "#2b2b2b", width: "auto", marginRight: '10px' }}
              />
              Update
            </IconButton>
            <IconButton
              onClick={toHome}
              aria-label="upload picture"
              component="span"
              sx={{
                padding: "1rem",
                fontSize: "18px",
                color: "#2b2b2b",
                background: "#FFBB00",
                borderRadius: "6px",
              }}
            >
              {" "}
              <AddCircleOutlineIcon
                style={{ color: "#2b2b2b", width: "auto", marginRight: '10px' }}
              />
              Back
            </IconButton>
          </Box>

          {/*        
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
        })} */}
        </Box>
      </Container>
    </>
  );
};

export default EditProduct;
