import ActionType from "../ActionType";
import axios from "axios";

import { userService } from '../../store/service/UserService';
import { alertActions } from './AlertActions';
import { history } from '../helpers/History';
import { userConstants } from '../constants/UserConstants';
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
// import { useDispatch } from "react-redux";
// // 
// const getCategories = (signin) =>({
//     type: ActionType.USER_LOGIN,
//     payload: sigin,
// });

// export const userLogin = () =>{ // Dispatcher
    
//     return function(dispatch){
//         axios
//         // .get(`${process.env.REACT_APP_API+"/category/"}`)
//         .get(`${"http://127.0.0.1:8080/category"}`)
//         .then((response) =>{
//             console.log("response", response);
//             //dispatch(getCategories(response.data));
//         })
//         .catch((error)=>console.log(error));
//     };
// };

export const userActions = {
    login,
    logout,
    // getAll
};

function login(email, password) {

    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)

            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/f-dashboard');
                    console.log(user.userInfo.role, '=== role after faccing....user back to UserAction');
                    
                    // if(user.userInfo.role == 'admin'){
                    //     navigate('/admin')
                    // }
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
                
            );
            //console.log(email, "===email from user Action after dispatch");
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}