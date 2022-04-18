import ActionType from "../../ActionType";

export const setUserInfo = (userInfo) => ({
    type: ActionType.setToken,
    payload: userInfo,
})

