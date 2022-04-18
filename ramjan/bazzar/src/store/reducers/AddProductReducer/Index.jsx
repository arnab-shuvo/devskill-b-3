import ActionType from "../../ActionType";

const initialState = {
    newProduct: [],
}

const AddProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.addProduct:
            return { ...state, newProduct: action.payload };
        default:
            return state;
        }  
}
export default AddProductReducer;

