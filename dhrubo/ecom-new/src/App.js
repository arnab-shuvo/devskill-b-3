import logo from './logo.svg';
import './App.css';

import { BrowserRouter  as Router, Route, Routes} from 'react-router-dom'

import Navbar from '../src/Header/Navbar';
import AddProduct from './Product/AddProduct';
import ProductList from './Product/ProductList';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Router>
        <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route exact path='/' element={<ProductList/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
