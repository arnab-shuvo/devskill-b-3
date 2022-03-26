import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetails";
import Page404 from "./Pages/404";
import Navbar from "./Pages/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
