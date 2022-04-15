import { React, useEffect, useState } from 'react';

import {
  Routes, Route, 
} from "react-router-dom";

import Product from './Pages/FrontEnd/Product/index';
import ProductDetail from './Pages/FrontEnd/Product/productDetail';
import Page404 from './Pages/404'
import Home from './Pages/FrontEnd/Home';
import Category from './Pages/FrontEnd/Product/Category';

// import Login from './Components/_Login';
import Login from './Components/Login';
import Signup from './Components/Signup';
import FrontDashboard from './Pages/FrontEnd/FrontDashboard';

/* Backend (Admin panel) Components or pages */
import Dashboard from './Pages/Backend/Dashboard';
import ProductCreate from './Pages/Backend/Product/Create';
import ManageProduct from './Pages/Backend/Product/Admin';
import ManageCategory from './Pages/Backend/ProductCategory/index';
import CategoryCreate from './Pages/Backend/ProductCategory/create';
import CartDetail from './Pages/FrontEnd/Checkout/Cart';
import PublicLayout from './Layouts/FrontEnd/PublicLayout';
import UserLayout from './Layouts/FrontEnd/UserLayout';
import AdminLayout from './Layouts/Backend/AdminLayout';


function App() {
  
  return (
    <>   
    <Routes>

      <Route path="/*" element={<PublicLayout />}>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path='all-products' element={<Product />}  />
          <Route path='login' element={<Login />}  />
          <Route path='signup' element={<Signup />}  />
          <Route path='product-detail/:id' element={<ProductDetail />}  />
          <Route path='category' element={<Category />} />
          <Route path='product-category/:id' element={<Category />} />
      </Route>

      <Route path="/user/*" element={<UserLayout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path='f-dashboard' element={<FrontDashboard />} />
        <Route path='cart' element={<CartDetail />} />
      </Route>

      <Route path="/admin/*" element={<AdminLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="product" element={<ManageProduct />} />
        <Route path="product/create" element={<ProductCreate />} />
        <Route path="category" element={<ManageCategory />} />
        <Route path="category/create" element={<CategoryCreate />} />
      </Route>

      <Route path="*" element={<Page404 />} />

    </Routes>

      {/* <Routes>
          

          <Route path='*' element={<Page404 />} />

          {/* Order & Checkout and Cart */}
          

          {/* Admin Panel Links * /}
          <Route path='/admin/' element={<Dashboard />}  />

          <Route path='/add-product/' element={<ProductCreate />}  />
          <Route path='/view-product/' element={<ProductView />}  />
          <Route path='/edit-product/' element={<ProductUpdate />}  />
          <Route path='/manage-product/' element={<ManageProduct />}  />

      </Routes> */}
    
      
    </>
  );
}

export default App;
