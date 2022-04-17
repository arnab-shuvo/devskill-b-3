import React, { useEffect, useState } from "react";
import "./home_styles.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import cogotoast from "cogo-toast";
import Grid from "@mui/material/Grid";
import Product from "../../components/Product/Product";
import Filter from "../../components/Home Header/Filter/Filter";
import Sort from "../../components/Home Header/Sort/Sort";
import Search from "../../components/Home Header/Search/Search";
import { delete_product } from "../../store/thunks/owner_thunk";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [selected_page, set_selected_page] = useState(1);
  const [page_count, set_page_count] = useState(null);
  //
  //
  //

  const on_product_delete = async (product_id, index) => {
    const deleted = await delete_product(product_id);
    deleted
      ? setProducts((prev_products) => [
          ...prev_products.slice(0, index),
          ...prev_products.slice(index + 1),
        ])
      : cogotoast.warn("cant delete the product");
  };

  useEffect(() => {
    const execute = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/products?p=${selected_page}`
        );
        setProducts(response.data.products);
        response.data.page_count && set_page_count(response.data.page_count);
      } catch (error) {
        return cogotoast.error(error.message);
      }
    };
    execute();
  }, [selected_page]);
  //
  //
  //
  return (
    <>
      <div className="home-header">
        <h1>Products</h1>
        <div className="actions">
          <Search setProducts={setProducts} setPageCount={set_page_count} />
          <Filter setProducts={setProducts} />
          <Sort page={selected_page} setProducts={setProducts} />
        </div>
      </div>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Product
            index={index}
            product={product}
            on_product_delete={on_product_delete}
          />
        ))}
      </Grid>
      <ReactPaginate
        className="pagination-bar"
        pageCount={page_count}
        onPageChange={({ selected }) => set_selected_page(selected + 1)}
      />
    </>
  );
};

export default Home;
