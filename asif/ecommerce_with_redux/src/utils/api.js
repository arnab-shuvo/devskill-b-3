import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_PRODUCTS } from "../store/actionTypes";

const useMethods = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  const navigate = useNavigate();
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
      console.log(response.data);
      dispatch({
        type: SET_PRODUCTS,
        payload: {
          products: response.data,
        },
      });
    } catch (error) {
      return alert(error.message);
    }
  };

  const get_product_by_category = async (category_name) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${category_name}`
      );
      return dispatch({
        type: SET_PRODUCTS,
        payload: {
          products: response.data,
        },
      });
    } catch (error) {
      return alert(error.message);
    }
  };
  const sort_product = async (type) => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products?sort=${type}`
      );
      return dispatch({
        type: SET_PRODUCTS,
        payload: {
          products: response.data,
        },
      });
    } catch (error) {
      return alert(error.message);
    }
  };

  const create_product = async (data) => {
    try {
      const response = await axios.post("https://fakestoreapi.com/products", {
        ...data,
      });
      await dispatch({
        type: SET_PRODUCTS,
        payload: {
          products: [...products, response.data],
        },
      });
      return navigate("/");
    } catch (error) {
      return alert(error.message);
    }
  };

  const update_product = async (id, index, data) => {
    try {
      const response = await axios.put(
        `https://fakestoreapi.com/products/${id}`,
        {
          ...data,
        }
      );
      await dispatch({
        type: SET_PRODUCTS,
        payload: {
          products: [
            ...products.slice(0, index),
            response.data,
            ...products.slice(index + 1),
          ],
        },
      });
      return navigate("/");
    } catch (error) {
      return alert(error.message);
    }
  };

  const delete_product = async (id) => {
    try {
      await dispatch({
        type: SET_PRODUCTS,
        payload: {
          products: products.filter((product) => product.id != id),
        },
      });
      return navigate("/");
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
