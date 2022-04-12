import { productListApi, productsListApi } from "../../../utils/apis/api";
import ActionType from "../../actionType";

export const getproductList = () => {
    return async (dispatch) => {
        const data = await productsListApi()
        dispatch(setproductList(data))
    }
}

export const setproductList = (productList) => ({
    type: ActionType.setproductList,
    payload: productList
})

export const getselectedProduct = (id) => {
    return async (dispatch) => {
        const data = await productListApi(id)
        dispatch(setselectedProduct(data))
    }
}

export const setselectedProduct = (product) => ({
    type: ActionType.selectedProduct,
    payload: product
})

