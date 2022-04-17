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
import EditProfile from "./pages/Edit Profile/EditProfile";
import Signup from "./pages/Auth/Signup/Signup";
import OwnerDashboard from "./pages/Owner Dashboard/OwnerDashboard";
import OwnerOrderList from "./components/owner-components/order-lists/OwnerOrderList";
import OwnerCustomerList from "./components/owner-components/customer-lists/OwnerCustomerList";
import OwnerCategoryPage from "./components/owner-components/owner-category/OwnerCategoryPage";
import OwnerProductsPage from "./components/owner-components/owner-products/OwnerProductsPage";
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

          <Route path="/owner-login" element={<Login />} />
          <Route path="/owner-dashboard" element={<OwnerDashboard />}>
            <Route path="order-list" element={<OwnerOrderList />} />
            <Route path="all-customer-list" element={<OwnerCustomerList />} />
            <Route path="categories" element={<OwnerCategoryPage />} />
            <Route path="products" element={<OwnerProductsPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
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
