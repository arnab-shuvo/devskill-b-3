import ActionType from "../ActionType";

const initialState = {
    categoryList:[],
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
          
        default:
            return state;
    }

}
export default CategoryReducer;