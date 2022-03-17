import ActionType from "../../actionType";

const initialState = {
    productr: []
}

const productReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ActionType.setProductList:
            return {...state, productr: action.payload};
        default:
           return state;
    }
}

export default productReducer;