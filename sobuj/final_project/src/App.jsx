import { React, useEffect, useState } from 'react';

import {
  Routes, Route, 
} from "react-router-dom";

import Product from './Pages/FrontEnd/Product/index';
import ProductDetail from './Pages/FrontEnd/Product/productDetail';
import Page404 from './Pages/404'
import Home from './Pages/FrontEnd/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import FrontDashboard from './Pages/FrontEnd/FrontDashboard';
import FrontUserDashboard from './Pages/FrontEnd/FrontDashboard/index';

/* Backend (Admin panel) Components or pages */
import Dashboard from './Pages/Backend/Dashboard';

import CreateCategory from './Pages/Backend/ProductCategory/create';
import UpdateCategory from './Pages/Backend/ProductCategory/update';
import ManageProductCategory from './Pages/Backend/ProductCategory/index';


import CreateProduct from './Pages/Backend/Product/Create';
import ProductView from './Pages/Backend/Product/View';
import UpdateProduct from './Pages/Backend/Product/Update';
import ManageProduct from './Pages/Backend/Product/Manage';

import UpdateUser from './Pages/Backend/Users/update';
import ManageUsers from './Pages/Backend/Users/index';
import UserDetail from './Pages/Backend/Users/view';

import ManageOrders from './Pages/Backend/Orders/index';
import UpdateOrder from './Pages/Backend/Orders/update';

import Category from './Pages/FrontEnd/Product/Category';
import CartDetail from './Pages/FrontEnd/Checkout/Cart';
import Checkout from './Pages/FrontEnd/Checkout/Checkout';
// import useToken from './Components/useToken';
import MyOrders from './Pages/FrontEnd/Checkout/Orders';
import OrderDetail from './Components/Backend/OrderDetail';

function App() {

  const [showLoader, setShowLoader] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
          loaderChange(false)
        }, 1000)
    }, []);

  const loaderChange = (show = false) =>{
      setShowLoader (show)
    }

  return (
    <>   
      <Routes>
          <Route path='/' element={<Home />}  />  
          <Route path='/all-products/' element={<Product />}  />
          <Route path='/login/' element={<Login />}  />
          <Route path='/signup/' element={<Signup />}  />
          <Route path='/product-detail/:id' element={<ProductDetail />}  />
          <Route path='/category/' element={<Category />} />
          <Route path='/product-category/:id' element={<Category />} />

          <Route path='*' element={<Page404 />} />

          {/* Order & Checkout and Cart */}
          <Route path='/user/dashboard/' element={<FrontDashboard />} />
          <Route path='/user/orders/' element={<FrontUserDashboard />} />
          <Route path='/user/cart/' element={<CartDetail />} />
          <Route path='/user/checkout/' element={<Checkout />} />
          <Route path='/user/my-orders/' element={<MyOrders />} />

          {/* Admin Panel Links */}
          <Route path='/admin/' element={<Dashboard />}  />
          {/* PRODUCT CATEGORIES */}
          <Route path='/admin/create-category/' element={<CreateCategory />}  />
          <Route path='/admin/edit-category/' element={<UpdateCategory />}  />
          <Route path='/admin/manage-category/' element={<ManageProductCategory />}  />
          {/* PRODUCTs */}
          <Route path='/admin/create-product/' element={<CreateProduct />}  />
          <Route path='/admin/view-product/:id' element={<ProductView />}  />
          <Route path='/admin/edit-product/:id' element={<UpdateProduct />}  />
          <Route path='/admin/manage-product/' element={<ManageProduct />}  />
          {/* ORDER MANAGEMENT */}
          <Route path='/admin/edit-order/:id' element={<UpdateOrder />}  />
          <Route path='/admin/manage-orders/' element={<ManageOrders />}  />
          <Route path='/admin/order-details/:id' element={<OrderDetail />}  />
          {/* ORDER MANAGEMENT */}
          <Route path='/admin/edit-user/:id' element={<UpdateUser />}  />
          <Route path='/admin/manage-users/' element={<ManageUsers />}  />
          <Route path='/admin/user-detail/:id' element={<ManageUsers />}  />

      </Routes>
    
      
    </>
  );
}

export default App;
