import { singleProductAPI } from "../../../utills/API";
import ActionType from "../../ActionType";


const setSingleProduct = (singleProduct) => ({
    type: ActionType.getSingleProduct,
    payload : singleProduct,
})


export const getSingleProductListAction = (id) => { 
    return async (dispatch) => {
        const data = await singleProductAPI(id);
        
        dispatch(setSingleProduct(data))
    }
}