import ActionType from "../ActionType";

const initialState = {
    categoryList:[],
    newCategory:[],
    loading: true
}

const CategoryReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionType.GET_CATEGORY_LIST:
            return{
                ...state, 
                categoryList:action.payload,
                loading:false,
            }
        case ActionType.ADD_NEW_CATEGORY:
            return{...state, newProduct: action.payload}
                
        default:
            return state;
    }

}
export default CategoryReducer;