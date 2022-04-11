import { React, useEffect, useState } from 'react';

import {
  Routes, Route, 
} from "react-router-dom";

import Product from './Pages/FrontEnd/Product/index';
import ProductDetail from './Pages/FrontEnd/Product/productDetail';
import Page404 from './Pages/404'
import Home from './Pages/FrontEnd/Home';
// import Login from './Components/_Login';
import Login from './Components/Login';
import Signup from './Components/Signup';
import FrontDashboard from './Pages/FrontEnd/FrontDashboard';

/* Backend (Admin panel) Components or pages */
import Dashboard from './Pages/Backend/Dashboard';
import ProductCreate from './Pages/Backend/Product/Create';
import ProductView from './Pages/Backend/Product/View';
import ProductUpdate from './Pages/Backend/Product/Update';
import ManageProduct from './Pages/Backend/Product/Admin';
import Category from './Pages/FrontEnd/Product/Category';
import CartDetail from './Pages/FrontEnd/Checkout/Cart';
import useToken from './Components/useToken';

 
function App() {

  // const [token, setToken] = useState();
  

  const [showLoader, setShowLoader] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
          loaderChange(false)
        }, 1000)
    }, []);

  const loaderChange = (show = false) =>{
      setShowLoader (show)
    }

  
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>   
      <Routes>
          <Route path='/' element={<Home />}  />  
          <Route path='/all-products/' element={<Product />}  />
          {/* <Route path='/login/' element={<Login />}  /> */}
          <Route path='/login/' element={<Login />}  />
          <Route path='/signup/' element={<Signup />}  />
          <Route path='/product-detail/:id' element={<ProductDetail />}  />
          <Route path='/category/' element={<Category />} />
          <Route path='/product-category/:id' element={<Category />} />

          <Route path='*' element={<Page404 />} />

          {/* Order & Checkout and Cart */}
          <Route path='/f-dashboard/' element={<FrontDashboard />} />
          <Route path='/cart/' element={<CartDetail />} />

          {/* Admin Panel Links */}
          <Route path='/admin/' element={<Dashboard />}  />

          <Route path='/add-product/' element={<ProductCreate />}  />
          <Route path='/view-product/' element={<ProductView />}  />
          <Route path='/edit-product/' element={<ProductUpdate />}  />
          <Route path='/manage-product/' element={<ManageProduct />}  />

      </Routes>
    
      
    </>
  );
}

export default App;
