import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

function App() {
  const [details, setDetails] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState();

  const detailsHandler = (id) => {
    setDetails(false);
    setSelectedProduct(id);
  };

  return (
    <div>
      {details === true ? (
        <ProductList detailsHandler={detailsHandler} />
      ) : (
        <ProductDetails productId={selectedProduct} />
      )}
    </div>
  );
}
export default App;
