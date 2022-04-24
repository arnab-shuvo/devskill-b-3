import ActionType from "../ActionType";

const initialState = {
    token:null,
    newRegistration:[],
    myInfo:[],
    userInfo:[],
    updateMyInfo:[],
    userList:[],
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionType.setToken:
            return{...state, isAuthUser: true, token: action.payload}
        
        case ActionType.registration:
            return{...state, newRegistration: action.payload}
        
        case ActionType.MY_INFO:
            return{...state, myInfo: action.payload}
        
        case ActionType.USER_INFO:
            return{...state, userInfo: action.payload}
        
        case ActionType.UPDATE_MY_INFO:
            return{...state, updateMyInfo: action.payload}
        
        case ActionType.USER_LIST:
            return{...state, userList: action.payload}
        
        case ActionType.LOGOUT:
            localStorage.removeItem("user");
            return { ...state, isAuthUser: false, token: {} };
        default:
            return state;
    }
};

export default userReducer;