
const initialState = {
    loader: false,
};

const loaderReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'loaderOn':
            return { ...state, loader: true };
        case 'decrease':
            return { ...state, loader: false };
        default:
            return state;
     }
   
}
export default loaderReducer