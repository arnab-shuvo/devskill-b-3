import ActionType from "../../actionType";

const initialState = {
    product: {}
}

const selectedProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.selectedProduct:
            return {...state, product: action.payload}
    
        default:
            return state;
    }
}

export default selectedProductReducer;