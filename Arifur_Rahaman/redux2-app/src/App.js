import { Route, Routes } from 'react-router-dom';
import './App.css';
import EditProduct from './Pages/EditProduct';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productDetails/:id" element={<ProductDetails />}/>
        <Route path="productEdit/:id" element={<EditProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
