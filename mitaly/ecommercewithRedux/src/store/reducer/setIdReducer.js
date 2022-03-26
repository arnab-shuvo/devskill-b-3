
const initialState = {
    productId: 0,
};

const setIdReducer = (state = initialState, action)=>{
if(action.type === 'setId'){
    return {...state, productId: action.payload};
}else{
    return state;
}
};
export default setIdReducer;