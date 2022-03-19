import { action_type } from "../constants/action_type"
export const setProducts = (products)=>{
    return {
        type: action_type.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProduct = (product)=>{
    return {
        type: action_type.SELECTED_PRODUCT,
        payload: product
    }
}

export const setProductEdit = (product)=>{
    return {
        type: action_type.SET_PRODUCT_EDIT,
        payload: product,
    }
}