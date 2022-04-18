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