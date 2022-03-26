import { productListApi } from "../../../utls/api";
import ActionType from "../../actionType";

const setProductList = (list) => ({
    type: ActionType.setAllProducts,
    payload:list, 
})

export const getProductListAction = () => {
    return async (dispatch) => {
        const data = await productListApi();
        dispatch(setProductList(data))
    };
}; 