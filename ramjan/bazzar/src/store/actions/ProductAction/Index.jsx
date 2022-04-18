import { productListAPI } from "../../../utills/API";
import ActionType from "../../ActionType";

export const setProductList= (productList) => ({
    type: ActionType.getProductsList,
    payload : productList,
})


export const getProductListAction = () => { 
    return async (dispatch) => {
        const data = await productListAPI();
        dispatch(setProductList(data))
    }
}