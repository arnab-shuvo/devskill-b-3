import { AllCategoryAPI } from "../../../utills/API";
import ActionType from "../../ActionType";

export const setCategoryList = (categoryList) => ({
    type: ActionType.category,
    payload : categoryList,
})


export const getAllCategoryAction = () => { 
    return async (dispatch) => {
        const data = await AllCategoryAPI();
        dispatch(setCategoryList(data))
    }
}