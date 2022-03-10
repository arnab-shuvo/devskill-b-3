import { React, useEffect, useState } from 'react';
// import './css/style.css';
import Preloader from  './Components/Preloader';
import ScrollToTop from './Components/ScrollToTop'
import Home from './Pages/Home/index';
import Navbar from './Components/Navbar';
import Recommend from './Components/Recommend';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import {Routes, Route} from "react-router-dom";
import Products from './Pages/Product';
import ProductDetail from './Pages/Product/ProductDetail';

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
          <Route path='/product-detail/:id' element={<ProductDetail />}  />
      </Routes>
    
      
    </>
  );
}

export default App;
