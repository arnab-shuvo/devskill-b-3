import { GetAllProducts } from "../utilities/api/ProductApi";
import IProduct from "../utilities/IProduct";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import ProductList from "./ProductList";


const Home = () => {
    const [products, setProducts] = useState<IProduct[] | null>(null);
    useEffect(() => {
        GetAllProducts().then(r => {
            setProducts(r);
        });
    }, [])

  return (
    <>
      {products ? <ProductList products={products}/> : <Loader/>}
    </>
  );
};
export default Home;


