import axios from "axios";

const useMethods = () => {
  const get_products = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      return alert(error.message);
    }
  };

  const get_product_by_category = async (category_name) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category_name}`
      );
      return response.data;
    } catch (error) {
      return alert(error.message);
    }
  };
  const sort_product = async (type) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?sort=${type}`
      );

      return response.data;
    } catch (error) {
      return alert(error.message);
    }
  };

  return { get_products, sort_product, get_product_by_category };
};

export default useMethods;
