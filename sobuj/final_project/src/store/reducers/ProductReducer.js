import ActionType from "../ActionType";

const initialState = {
    productList: [],
    allProduct:[],
    productDetail:[],
    newProduct:[],
}

const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionType.getProductList:
            return{...state, productList: action.payload}
        
        case ActionType.getLoadProducts:
            return{...state, allProduct: action.payload} 
            
        case ActionType.getProductDetail:
            return{...state, productDetail: action.payload}

        case ActionType.ADD_NEW_PRODUCT:
            return{...state, newProduct: action.payload}
            
        case ActionType.deleteProduct:
            return{...state}
            
        default:
            return state;
    }
};

export default productReducer;