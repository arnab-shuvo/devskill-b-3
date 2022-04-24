import axios from "axios";
import ActionType from "../ActionType";

export const setUserInfo =(userInfo)=>({
    type: ActionType.setToken,
    payload: userInfo
});

export const unSetUserInfo = (userInfo) =>({
    type: ActionType.unSetToken,
    payload: userInfo
})

export const logout = () => {
    return {
      type: ActionType.LOGOUT
    };
};

export const newUserRegistration =(newUser)=>({
    type: ActionType.registration,
    payload: newUser
});

export const updateMyInfoAction=(updateMyInfo)=>({
    type:ActionType.UPDATE_MY_INFO,
    payload:updateMyInfo
});

// export const updateMyInfo=(userInfoArray)=>{
//     console.log(userInfoArray.userToken, 'UserTOken from Update action submit');
//     return function(dispatch){
//         axios
//         .patch(`${"http://127.0.0.1:8080/my-detail"}`,{
//             method: "PATCH",
//             headers: {
//                 "Content-Type": "application/json",
//                 "authorization": "bearer "+ userInfoArray.userToken
//             },
//             body:{
//                 "address": {
//                    "geolocation": {
//                        "lat": userInfoArray.lat,
//                        "long": userInfoArray.long
//                    },
//                    "city": userInfoArray.city,
//                    "street": userInfoArray.street,
//                    "number": userInfoArray.number,
//                    "zipcode": userInfoArray.zipcode
//                },
//                "role": "user",
//                "email": userInfoArray.email,
//                "username": userInfoArray.username,
//                "phone": userInfoArray.phone,
//                "password": userInfoArray.password
//            }
//         })
//         .then((response) =>{
//             console.log(response.data, 'update action submit');
//             dispatch(updateMyInfoAction(response.data));
//         })
//         .catch((error)=>console.log(error));
//     };
// };

const loadMyInfoAction=(myInfo)=>({
    type:ActionType.MY_INFO,
    payload:myInfo
});

export const loadMyInfo=(userToken)=>{
    // console.log(userToken, '===load myInfo Action')
    return function(dispatch){
        axios
        .get(`${"http://127.0.0.1:8080/my-detail"}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer "+ userToken
            },
        })
        .then((response) =>{
            dispatch(loadMyInfoAction(response.data));
        })
        .catch((error)=>console.log(error));
    };
};


const getUserList = (userList) =>({
    type: ActionType.USER_LIST,
    payload: userList,
});

export const loadUserListAction = (userToken) =>{
    return function(dispatch){
        axios
        .get(`${"http://127.0.0.1:8080/user"}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer "+ userToken
            },
        })
        .then((response) =>{
            dispatch(getUserList(response.data));
        })
        .catch((error)=>console.log(error));
    };
};

const getUserInfoAdminAction = (userInfo) =>({
    type: ActionType.USER_INFO,
    payload: userInfo,
});

export const getUserInfo = (id, userToken) =>{
    return function(dispatch){
        axios
        .get(`${"http://127.0.0.1:8080/user/"+id}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer "+ userToken
            },
        })
        .then((response) =>{
            dispatch(getUserInfoAdminAction(response.data));
        })
        .catch((error)=>console.log(error));
    };
};
