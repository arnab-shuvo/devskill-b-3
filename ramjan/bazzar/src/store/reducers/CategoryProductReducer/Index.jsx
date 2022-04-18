import ActionType from "../../ActionType";

const initialState = {
    products : [],  
}

const categoryProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.productByCategory:
            return { ...state, products: action.payload };
        default:
            return state;
    
    }
    
}

export default categoryProductReducer;
