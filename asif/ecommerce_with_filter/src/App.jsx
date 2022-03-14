import React, { useEffect, useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Pages/Home/Home";
import ProductDescription from "./Pages/ProductDescription/ProductDescription";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import CreateProduct from "./Pages/Create Product/CreateProduct";
import useMethods from "./utils/api";
import UpdateProduct from "./Pages/Edit Product/UpdateProduct";
const App = () => {
  const [page, setPage] = useState("home");
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    data: null,
    index: null,
  });

  const { get_products } = useMethods();

  useEffect(() => {
    const getProduct = async () => {
      try {
        return setProducts(await get_products());
      } catch (error) {
        return alert(error.message);
      }
    };
    getProduct();
  }, []);

  return (
    <main className="main-container">
      <Navigation onPageChange={setPage} />
      <div className="priority">
        {page == "home" && (
          <Home
            products={products}
            setProducts={setProducts}
            onClickProduct={setProduct}
            onPageChange={setPage}
          />
        )}
        {page == "product-description" && (
          <ProductDescription
            onPageChange={setPage}
            product={product}
            setProducts={setProducts}
          />
        )}
        {page == "create-product" && (
          <CreateProduct
            setPage={setPage}
            setProducts={setProducts}
            onPageChange={setPage}
          />
        )}
        {page == "update-product" && (
          <UpdateProduct
            setPage={setPage}
            setProducts={setProducts}
            product={product}
            setProduct={setProduct}
          />
        )}
      </div>
      <Footer />
    </main>
  );
};

export default App;
