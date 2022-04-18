import ActionType from "../../ActionType";
const initialState = {
  products :[]  
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.getProductsList:
            return { ...state, products: action.payload };
        default:
            return state;
        }  
}
export default productReducer;