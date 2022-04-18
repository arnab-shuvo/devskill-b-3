

import { productByCategoryAPI } from "../../../utills/CategoryProductAPI";
import ActionType from "../../ActionType";


const setAllProductByCategory = (AllproductByCategory) => ({
    type: ActionType.productByCategory,
    payload : AllproductByCategory,
})


export const getAllProductListByCategoryAction = (cat) => { 
    return async (dispatch) => {
        const data = await productByCategoryAPI(cat);
        
        dispatch(setAllProductByCategory(data))
    }
}

