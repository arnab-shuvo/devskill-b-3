import ActionType from "../ActionType";
import axios from "axios";

export const addCategoryAction = (addCategory) =>({
    type: ActionType.ADD_NEW_CATEGORY,
    payload: addCategory,
});

export const deleteCategoryAction = (delCategory) =>({
    type: ActionType.DEL_CATEGORY,
    payload: delCategory,
});

const getCategories = (categoryList) =>({
    type: ActionType.GET_CATEGORY_LIST,
    payload: categoryList,
});

export const loadCategories = () =>{ // Dispatcher
    return function(dispatch){
        axios
        // .get(`${process.env.REACT_APP_API+"/category/"}`)
        .get(`${"http://127.0.0.1:8080/category"}`)
        .then((response) =>{
            //console.log("response", response);
            dispatch(getCategories(response.data));
        })
        .catch((error)=>console.log(error));
    };
};
