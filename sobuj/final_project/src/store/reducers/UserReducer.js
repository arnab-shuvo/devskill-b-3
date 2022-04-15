// import { userConstants } from '../constants/UserConstants';
import ActionType from "../ActionType";

const initialState = {
    token:null,
    userInformation:[]
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ActionType.setToken:
            return{...state, token: action.payload}
            
        default:
            return state;
    }
};

export default  userReducer;

// export function users(state = {}, action) {
//     switch (action.type) {
//     case userConstants.GETALL_REQUEST:
//         return {
//         loading: true
//         };
//     case userConstants.GETALL_SUCCESS:
//         return {
//         items: action.users
//         };
//     case userConstants.GETALL_FAILURE:
//         return { 
//         error: action.error
//         };
//     default:
//         return state
//     }
// }