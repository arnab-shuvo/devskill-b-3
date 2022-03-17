import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Error404 from "./pages/404";
import Home from "./pages/home/Home";
import CreateNewProduct from "./pages/product/CreateNewProduct";
import EditProduct from "./pages/product/EditProduct";
import ProductDetail from "./pages/product/ProductDetail";
import ProductList from "./pages/product/ProductList";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/product/edit/:productId" element={<EditProduct />} />
        <Route path="/createproduct" element={<CreateNewProduct />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
