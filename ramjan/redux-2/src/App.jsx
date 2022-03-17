import { Container } from '@mui/material';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Index';
import NotFound from './pages/404/Index';
import About from './pages/About/Index';
import Home from './pages/Home/Index';
import Privecy from './pages/PrivecyPolicy/Index';
import EditProduct from './pages/Products/EditProduct';
import Products from './pages/Products/Index';
import SingleProduct from './pages/Products/SingleProduct';
import Return from './pages/ReturnPolicy/Index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Layout>
      
        
      <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/about' element={ <About/>} />
          <Route path='/privecy' element={ <Privecy/>} />
          <Route path='/return' element={ <Return/>} />
          <Route path='/products' element={ <Products/>} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/products/:id/edit' element={<EditProduct />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={ <Navigate to='/404'/>} />
        </Routes>
      </Layout>

    </Container>
  )
}

export default App
