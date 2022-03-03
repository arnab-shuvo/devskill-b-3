import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useMethods from "../../utils/api";
import "./home.css";
import Product from "../../Components/Product/Product";
import CategoryFilter from "../../Components/Filters/CategoryFilter";
import Order from "../../Components/Filters/Order";
const Home = ({ onClickProduct, onPageChange }) => {
  const [products, setProducts] = useState([]);
  const { get_products, get_product_by_category, sort_product } = useMethods();

  const onSort = async (type, value) => {
    switch (type) {
      case "Order":
        const sorted_product = await sort_product(value);
        return setProducts(sorted_product);
      case "Category":
        const category_products = await get_product_by_category(value);
        return setProducts(category_products);
      default:
        return;
    }
  };

  useEffect(() => {
    const work = async () => {
      try {
        return setProducts(await get_products());
      } catch (error) {
        return alert(error.message);
      }
    };
    work();
  }, []);
  return (
    <div className="home-page">
      <div className="home-page-header">
        <h2>Products</h2>
        <div className="filter-container">
          <div className="category-filter">
            <CategoryFilter onSort={onSort} />
          </div>
          <div className="sort-filter">
            <Order onSort={onSort} />
          </div>
        </div>
      </div>
      {products.length <= 0 ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product
                product={product}
                onPageChange={onPageChange}
                onClickProduct={onClickProduct}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Home;
