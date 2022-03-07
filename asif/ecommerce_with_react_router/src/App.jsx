import React, { useEffect, useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import ProductDescription from "./Pages/ProductDescription/ProductDescription";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import CreateProduct from "./Pages/Create Product/CreateProduct";
import useMethods from "./utils/api";
import UpdateProduct from "./Pages/Edit Product/UpdateProduct";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const [products, setProducts] = useState([]);
  const { get_products } = useMethods();

  useEffect(() => {
    const getProduct = async () => {
      try {
        return setProducts(await get_products());
      } catch (error) {
        return alert(error.message);
      }
    };
    getProduct();
  }, []);

  return (
    <main className="main-container">
      <Navigation />
      <div className="priority">
        <Routes>
          <Route
            path="/"
            element={<Home products={products} setProducts={setProducts} />}
          />
          <Route
            path="/product-description/:id/:index"
            element={<ProductDescription setProducts={setProducts} />}
          />
          <Route
            path="/create-product"
            element={<CreateProduct setProducts={setProducts} />}
          />
          <Route
            path="/update-product/:id/:index"
            element={<UpdateProduct setProducts={setProducts} />}
          />
        </Routes>
      </div>
      <Footer />
    </main>
  );
};

export default App;
