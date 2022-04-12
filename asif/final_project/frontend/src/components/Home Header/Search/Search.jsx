import React from "react";
import "./search_styles.css";
import axios from "axios";
const Search = ({ setProducts, setPageCount }) => {
  const on_search_submit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:8000/products?search=${e.target.search.value}`
    );

    setProducts(response.data.products);
    setPageCount(0);
  };
  return (
    <form onSubmit={(e) => on_search_submit(e)}>
      <h3>Search Product</h3>
      <input
        name="search"
        type="text"
        className="search-input"
        placeholder="search products..."
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default Search;
