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
const Home = () => {
  const [products, setProducts] = useState([]);
  const [selected_page, set_selected_page] = useState(1);
  const [page_count, set_page_count] = useState(null);
  //
  //
  //

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
    console.log("pr");
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
        {products.map((product) => (
          <Product product={product} />
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
