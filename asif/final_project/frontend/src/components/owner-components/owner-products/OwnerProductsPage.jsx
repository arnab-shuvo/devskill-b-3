import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import Home from "../../../pages/Home/Home";
import CreateProduct from "../create-product/CreateProduct";
import "./owner_products_page_styles.css";
const OwnerProductsPage = () => {
  const [creating_post, set_creating_post] = useState(false);
  return (
    <div className="owner-product-page">
      {creating_post ? (
        <CreateProduct set_creating_post={set_creating_post} />
      ) : (
        <>
          <Button
            onClick={() => set_creating_post(true)}
            color="primary"
            variant="contained"
          >
            Create Product
          </Button>
          <Home />
        </>
      )}
    </div>
  );
};

export default OwnerProductsPage;
