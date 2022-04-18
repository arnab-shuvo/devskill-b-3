import { useSelector } from "react-redux";

export function fetchProducts() {
    return fetch(`http://127.0.0.1:8080/products`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        return json.Products;
      });
  }
  
  
  export function fetchProductDetails(id) {
    
    return fetch(`http://127.0.0.1:8080/products/${id}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        return json.Products.filter(product => {
          if (product._id === id) {
            return true;
          }
          else {
            return false;
          }
        });
      });
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }