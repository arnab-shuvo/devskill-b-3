import ActionType from "../../ActionType";

const initialState = {
    token: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.setToken:
            return { ...state, token: action.payload };
        default:
            return state;
        }  
}
export default userReducer;

