import ActionType from "../ActionType";

const initialState = {
    token:null,
    newRegistration:[],
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionType.setToken:
            return{...state, isAuthUser: true, token: action.payload}
        
        case ActionType.registration:
            return{...state, newRegistration: action.payload}
        
        case ActionType.LOGOUT:
            localStorage.removeItem("user");
            return { ...state, isAuthUser: false, token: {} };
        default:
            return state;
    }
};

export default userReducer;