import ActionType from "../../ActionType";

const initialState = {
    product : [],  
}

const singleProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.getSingleProduct:
            return { ...state, product: action.payload };
        default:
            return state;
    
    }
    
}

export default singleProductReducer;
