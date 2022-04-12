import ActionType from "../../ActionType";

ActionType
const initailState = {
    products: []
}
const productReducer = (state = initailState, action) => {
    switch (action.type) {
        case ActionType.setProdutList:
            return { ...state, products: action.payload };
        default:
            return state;
    }
}

export default productReducer;