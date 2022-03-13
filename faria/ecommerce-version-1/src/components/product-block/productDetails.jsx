import React, { useState, useEffect } from "react";

const ProductDetails = ({ showProductDetails, productId }) => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((result) => {
        setProductInfo(result);
        console.log(result);
      });
  }, [productId]);

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-center">Product Details</h2>
      <table className="mt-5 table table-striped table-hover table-bordered ">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Description</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Rating</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {productInfo && (
            <tr>
              <td>{productInfo.title}</td>
              <td>{productInfo.description}</td>
              <td>{productInfo.price}</td>
              <td>{productInfo.category}</td>
              <td>{productInfo.rating.rate}</td>
              <td>
                <button onClick={() => showProductDetails(null)}>
                  Back To the List
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
