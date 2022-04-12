import ActionType from "../../actionType";


const initialState = {
    counter: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.increase:
            return { ...state, counter: action.payload };
        case ActionType.decrease:
            return { ...state, counter: action.payload };
        default:
        return state;
    }
}
export default counterReducer
