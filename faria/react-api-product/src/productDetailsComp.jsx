import React, { useState, useEffect } from "react";

const ProductDetailsPage = ({showProductDetails,selectedProduct}) => {
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
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedProduct.title}</td>
            <td>{selectedProduct.description}</td>
            <td>{selectedProduct.price}</td>
            <td>{selectedProduct.category}</td>
            <td>
              <button onClick={() => showProductDetails(null)}>Back To the List</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailsPage;
