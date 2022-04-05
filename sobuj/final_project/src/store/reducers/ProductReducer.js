import ActionType from "../ActionType";

const initialState = {
    productList: [],
    productDetail:[],
}

const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionType.getProductList:
            return{...state, productList: action.payload}
        
        case ActionType.getProductDetail:
            return{...state, productDetail:action.payload}
            
        default:
            return state;
    }
};

export default productReducer;