import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/create-product" element={<CreateProduct />} />
        <Route exact path="/update-product/:id" element={<UpdateProduct />} />
        <Route path="/404" element={<PageNotFound />}/>
        <Route exact path="*" element={<Navigate to="/404"></Navigate>} />

      </Routes>

    </>

  );
}

export default App;
