import { AllUserAPI } from "../../../utills/API";
import ActionType from "../../ActionType";

const setUserList= (userList) => ({
    type: ActionType.getAllUser,
    payload : userList,
})


export const getUserAction = (token) => { 
    return async (dispatch) => {
        const data = await AllUserAPI(token);
        
        dispatch(setUserList(data))
    }
}