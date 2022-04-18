
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Admin from '../src/pages/Admin/Index';
import Contact from '../src/pages/Contact/Index';
import Home from '../src/pages/Home/Index';
import Shop from '../src/pages/Shop/Index';
import SingleProduct from '../src/pages/SingleProduct/Index';
import './App.css';
import Loader from './components/Loader/Index';
import NotFound from './pages/404/Index';
import About from './pages/About/Index';
import AddCategory from './pages/AllCategory/AddCategory';
import EditCategory from './pages/AllCategory/EditCategory';
import AllCategory from './pages/AllCategory/Index';
import AddProduct from './pages/AllProduct/AddProduct';
import EditProduct from './pages/AllProduct/EditProduct';
import AllProduct from './pages/AllProduct/Index';
import Blog from './pages/Blog/Index';
import Cart from './pages/Cart/Index';
import Signin from './pages/Signin/Index';
import SignUp from './pages/Signup/Index';
import EditUser from './pages/Users/EditUser';
import Users from './pages/Users/Index';
import Watches from './pages/Watches/Index';





function App() {
  const [loader, setLoader] = useState(true)
  const [checkSignin, setSignin ] = useState(true)
  
  useEffect( () => {
    setTimeout(() =>
    setLoader(false), 500)
  },[])

  return (
    <>
      {
        loader ? <Loader /> :
       
            <Routes>
              <Route path='/' element={ <Home />} />
              <Route path='/about' element={ <About />} />
              <Route path='/product' element={ <Shop />} />
              <Route path='/product/:id' element={ <SingleProduct />} />
              <Route path='/contact' element={ <Contact />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='admin' element={<Admin />} />
              
                    
              <Route path='Users' element={<Users />} /> 
            <Route path='Users/edituser/:id' element={<EditUser />} /> 
            <Route path='cart' element={<Cart />} />
              <Route path='allproduct' element={<AllProduct />} />
              <Route path='allproduct/addproduct' element={ <AddProduct />} />
              <Route path='allproduct/editproduct/:id' element={ <EditProduct />} />
              <Route path='allcategory' element={<AllCategory />} /> 
              <Route path='allcategory/addcategory' element={<AddCategory />} /> 
              <Route path='allcategory/editcategory/:id' element={<EditCategory />} /> 
              <Route path='category/:id' element={<Watches />} />
              <Route path='*' element={<Navigate to='/404' />} />
              <Route path='/facebook' element={<Navigate to='https://www.facebook.com/' />} />
              <Route path='/linkdin' element={<Navigate to='https://www.linkdin.com/' />} />
              <Route path='/instagram' element={<Navigate to='https://www.instagram.com/' />} />
              <Route path='/github' element={<Navigate to='https://github.com/' />} />
              <Route path='/404' element={<NotFound/>} />
            </Routes>
         
      }
    </>
  )
}

export default App
