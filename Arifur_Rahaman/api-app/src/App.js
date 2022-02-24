import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productDetails/:id" element={<ProductDetails/>}/>
    </Routes>
  );
}

export default App;
