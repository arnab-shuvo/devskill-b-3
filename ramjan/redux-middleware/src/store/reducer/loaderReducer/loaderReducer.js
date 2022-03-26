import ActionType from "../../actionType";



const initialState = {
    loader : false,
}

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.laoderOn:
            return { ...state, loader: true };
        case ActionType.loaderOff:
            return { ...state, loader: false }
        default:
            return state;
    }
}

export default loaderReducer;