import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
//Custom Components
import Products from "../Product/index";
import ProductDetail from "../Product/ProductDetail/";
import CreateProduct from "../Product/Create/index";
import Preloader from "../../Components/Preloader";
import UpdateProduct from "../Product/ProductUpdate";
import Recommend from "../../Components/Recommend";
import Testimonials from "../../Components/Testimonials";
import Footer from "../../Components/Footer";
import ScrollToTop from "../../Components/ScrollToTop";
import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import Services from "../../Components/Services";
import { useDispatch, useSelector } from "react-redux";
import { setProductlist } from "../../store/action/productAction";

const styles = {
  wraperContainer: {
    backgroundSize: "cover",
    width: "100%",
    minHeight: "900px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  sectionHeading: {
    fontFamily: "Arial",
    fontWeight: "700",
    color: "#000",
    borderWidth: "20%",
  },
  sectionText: {
    marginTop: "5px",
    fontSize: "16px",
    color: "#fff",
    letterSpacing: "0.5px",
  },
  sectionHeadBtmLine: {
    width: "60px",
    height: "3px !important",
    backgroundColor: "#a43f49",
    margin: "10px auto",
  },
};

const AvatersCustom = styled(Paper)(({ theme }) => ({
  height: "40px",
  width: "40px",
  color: "#fff",
  transition: "all 0.5s",
  "&:hover, &:focus": {
    background: "#ffeded",
    color: "#8c363e",
  },
  cursor: "pointer",
  textAlign: "center",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
}));

const Home = () => {
  const { products } = useSelector((store) => store.products);
  console.log(products, "===store");
  const dispatch = useDispatch();
  const productList = products;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((json) => {
        dispatch(setProductlist(json));
      });
  }, []);

  const [showLoader, setShowLoader] = useState(true);
  const [selectUpdate, setSelectUpdate] = useState(null);

  //Delete Product
  const delProd = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(setProductlist(json));
      });
  };

  //Update Procut
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateProduct = (product) => {
    //alert("Update Product-"+ id)
    setSelectUpdate(product);
    setOpen(true);
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />

      <Grid
        container
        style={styles.wraperContainer}
        sx={{ flexGrow: 1 }}
        justifyContent="center"
      >
        {productList ? (
          <>
            {selectUpdate !== null ? (
              <UpdateProduct
                product={selectUpdate}
                openModal={open}
                handleClose={handleClose}
              />
            ) : (
              <CreateProduct />
            )}

            <Products
              productList={productList}
              updateProd={updateProduct}
              delProd={delProd}
            />
          </>
        ) : (
          <>
            <Preloader />
          </>
        )}
      </Grid>

      <Recommend />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
