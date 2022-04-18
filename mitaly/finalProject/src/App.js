import './App.css';
import Dashboard from './layout/dashboard_layout';
import Home from './layout/home_layout';
import {Routes,Route} from 'react-router-dom';
import Login from './layout/login_layout';
import Cart from './layout/cart_layout';
import { AdminDashboard } from './layout/dashboard_layout/admin_dashboard_layout';
import CategoryForm from './component/admin/category/form';
import ProductDetails from './layout/product_detail_layout';
import SignUP from './layout/login_layout/signup';
function App() {
  return (
   <Routes>
     <Route 
        path='/' element={<Home/>}
     />
     <Route 
        path='/Dashboard' element={<Dashboard/>}
     />
     <Route 
        path='/login' element={<Login/>}
     />
      <Route 
        path='/signUP' element={<SignUP/>}
     />
     <Route 
        path='/cart' element={<Cart/>}
     />
     <Route 
        path='/AdminDashboard' element={<AdminDashboard/>}
     />
      <Route 
        path='/categoryForm' element={<CategoryForm/>}
     />
      <Route 
        path='/productDetails/:id' element={<ProductDetails/>}
     />
     <Route 
        path='*' element={<>404 page</>}
     />
   </Routes>
  );
}

export default App;
