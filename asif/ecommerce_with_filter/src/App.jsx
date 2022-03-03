import React, { useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import ProductDescription from "./Pages/ProductDescription/ProductDescription";
import "./App.css";
import Footer from "./Components/Footer/Footer";
const App = () => {
  const [page, setPage] = useState("home");
  const [product, setProduct] = useState(null);
  return (
    <main className="main-container">
      <Navigation />
      <div className="priority">
        {page == "home" ? (
          <Home onClickProduct={setProduct} onPageChange={setPage} />
        ) : (
          <ProductDescription onPageChange={setPage} product={product} />
        )}
      </div>
      <Footer />
    </main>
  );
};

export default App;
