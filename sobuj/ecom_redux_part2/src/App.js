import './App.css';
import { 
  // BrowserRouter as Router, 
  // Switch, 
  // Router,
  Route,
  Routes,
} from "react-router-dom";

import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import Page404 from './pages/404'

function App() {
  return (
    <div className="App">
      <Routes>
        <Header />
            <Route path='/'  element = {<ProductListing />} />
            <Route path='/product/:productID'  element = {<ProductDetails />} />
            <Route path='*'  element={<Page404 />} />

      </Routes>
      
 
    </div>
  );
}

export default App;
