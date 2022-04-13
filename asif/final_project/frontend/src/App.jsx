import React from "react";
import "./app.css";
import CartPage from "./pages/Cart/CartPage";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/Product_Details/ProductDetails";
import Login from "./pages/Auth/Login/Login";
import OrderPage from "./pages/Order/OrderPage";
import ProfilePage from "./pages/Profile/ProfilePage";
const App = () => {
  return (
    <div className="container">
      <Navigation />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product-details/:product_id"
            element={<ProductDetails />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/carts" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
