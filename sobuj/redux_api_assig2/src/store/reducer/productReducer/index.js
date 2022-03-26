import ActionType from "../../actionType";

const initialState ={
    products:[],
    productDetail:[],
}

const productReducer = ( state= initialState, action)=>{
    switch (action.type) {
        case ActionType.setProductList:
            return{...state, products:action.payload}
        case ActionType.getProductDetail:
            return{...state, productDetail:action.payload}
        default:
            return state;
    }
}
export default productReducer;

