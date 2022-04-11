import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./components/Layout/Admin";
import PublicLayout from "./components/Layout/Public";
import UserLayout from "./components/Layout/User";
import Error404 from "./pages/404";
import Category from "./pages/Admin/Category";
import CategoryCreate from "./pages/Admin/Category/Create";
import Dashboard from "./pages/Admin/Dashboard";
import Product from "./pages/Admin/Product";
import CreateProduct from "./pages/Admin/Product/Create";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Singup";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<PublicLayout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="/user/*" element={<UserLayout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="/admin/*" element={<AdminLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="product" element={<Product />} />
        <Route path="product/create" element={<CreateProduct />} />
        <Route path="category" element={<Category />} />
        <Route path="category/create" element={<CategoryCreate />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
