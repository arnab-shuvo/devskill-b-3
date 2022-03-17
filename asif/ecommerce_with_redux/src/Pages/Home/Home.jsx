import { Grid } from "@material-ui/core";
import "./home.css";
import Product from "../../Components/Product/Product";
import CategoryFilter from "../../Components/Filters/CategoryFilter";
import Order from "../../Components/Filters/Order";
import { useSelector } from "react-redux";
const Home = () => {
  const { products } = useSelector((store) => store);

  return (
    <div className="home-page">
      <div className="home-page-header">
        <h2>Products</h2>
        <div className="filter-container">
          <div className="category-filter">
            <CategoryFilter />
          </div>
          <div className="sort-filter">
            <Order />
          </div>
        </div>
      </div>
      {products.length <= 0 ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product index={index} product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Home;
