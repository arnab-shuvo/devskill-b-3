import { React, useEffect, useState } from 'react';

import {
  Routes, Route, 
} from "react-router-dom";

import Product from './Pages/FrontEnd/Product/index';
import ProductDetail from './Pages/FrontEnd/Product/productDetail';
import Page404 from './Pages/404'
import Home from './Pages/FrontEnd/Home';

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
          <Route path='/product-detail/:id' element={<ProductDetail />}  />
          <Route path='*' element={<Page404 />} />

      </Routes>
    
      
    </>
  );
}

export default App;
