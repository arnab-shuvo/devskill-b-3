import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductPageHeader from "./pages/Header";
import ProductList from "./components/product_block/productList";
import CreateProduct from "./components/product_block/createProduct";
import Navbar from "./pages/navbar";
import ProductDetails from "./components/product_block/productDetails";
import EditProduct from "./components/product_block/editProduct"
import Page404 from "./pages/404";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/all-products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<>404 page</>} />
      </Routes>
    </>
  );
}

export default App;
