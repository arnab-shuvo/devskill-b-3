import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopAppBar from './Components/TopAppBar';
import AddProcuct from './Pages/AddProcuct';
import EditProduct from './Pages/EditProduct';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div>
      <TopAppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProcuct />} />
        <Route path="productDetails/:id" element={<ProductDetails />}/>
        <Route path="productEdit/:id" element={<EditProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
