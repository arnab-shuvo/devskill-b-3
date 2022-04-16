import ActionType from "../ActionType";

const initialState = {
    token:null,
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionType.setToken:
            return{...state, isAuthUser: true, token: action.payload}
        // case ActionType.unSetToken:
        //     return{initialState, action}
        case ActionType.LOGOUT:
            localStorage.removeItem("user");
            return { ...state, isAuthUser: false, token: {} };
        default:
            return state;
    }
};

export default userReducer;