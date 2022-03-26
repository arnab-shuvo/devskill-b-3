const initialState = {
    counter:0,
};

const counterReducer = (state=initialState, action) =>{

switch (action.type){
    case "increase" :
        return{...state, counter: action.payload};
    case "decrease" :
        return{...state, counter: action.payload};
    default:
        return state;
    }
};

export default counterReducer;