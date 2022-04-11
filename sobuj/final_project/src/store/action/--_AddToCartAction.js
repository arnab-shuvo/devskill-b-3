import ActionType from '../ActionType';
import { fetchProducts, fetchProductDetails } from '../lib/fetchProducts';

export function addToCartAction(product) {
  return {
    type: ActionType.ADD_TO_CART,
    payload: { Id: product._id, Title: product.title, Price: product.price }
  };
}

export function removeFromCartAction(productId) {
  return {
    type: ActionType.REMOVE_FROM_CART,
    productId: productId
  };
}

export function updateCartAction(payload) {
  return {
    type: ActionType.UPDATE_CART,
    payload
  };
}

// export function getProducts(payload) {
//   return {
//     type: ActionType.FETCH_PRODUCTS,
//     payload: fetchProducts()
//   };
// }

// export function getProductDetails(productId) {
//   return {
//     type: ActionType.FETCH_PRODUCT_DETAILS,
//     payload: fetchProductDetails(productId)
//   };
// }