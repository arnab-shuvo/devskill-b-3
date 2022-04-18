import ActionType from "../../ActionType";

const initialState = {
    category : []
}

const categoryReducer = (state =initialState, action) => {
    switch (action.type) {
        case ActionType.category:
            return { ...state, category: action.payload }
        default:
            return state;
    }
}
export default categoryReducer;