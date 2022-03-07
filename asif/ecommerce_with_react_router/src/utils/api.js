import axios from "axios";

const useMethods = () => {
  const get_product = async (id) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data;
    } catch (error) {
      return alert(error.message);
    }
  };
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

  const create_product = async (data) => {
    try {
      const response = await axios.post("https://fakestoreapi.com/products", {
        ...data,
      });
      return response.data;
    } catch (error) {
      return alert(error.message);
    }
  };

  const update_product = async (id, data) => {
    try {
      const response = await axios.put(
        `https://fakestoreapi.com/products/${id}`,
        {
          ...data,
        }
      );
      return response.data;
    } catch (error) {
      return alert(error.message);
    }
  };

  const delete_product = async (id) => {
    try {
      const response = await axios.delete(
        `https://fakestoreapi.com/products/${id}`
      );
      return response.data.id;
    } catch (error) {
      return alert(error.message);
    }
  };

  return {
    get_product,
    create_product,
    get_products,
    sort_product,
    get_product_by_category,
    update_product,
    delete_product,
  };
};

export default useMethods;
