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

const loadMyInfoAction=(myInfo)=>({
    type:ActionType.MY_INFO,
    payload:myInfo
});

export const loadMyInfo=(userToken)=>{
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
