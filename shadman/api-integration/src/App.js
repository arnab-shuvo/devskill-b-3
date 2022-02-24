import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";

const App = () => {
  const [productList, setProductList] = useState([]);
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        //console.log(json)
        setProductList(json);
      });
  }, []);

  return (
    <div className="App">
      <Home productList={productList} setProductList={setProductList} />
    </div>
  );
};

export default App;
