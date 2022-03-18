import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [prodcuts, setProducts] = useState([]);
  const navigate = useNavigate();

  const toDetail = (id) => {
    navigate(`/product-detail/${id}`);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <>
      <p>Home</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {prodcuts.map((product) => {
            return (
              <tr>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => toDetail(product.id)}>
                    See Detail
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
