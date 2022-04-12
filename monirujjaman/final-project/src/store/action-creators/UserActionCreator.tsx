import { Dispatch } from "react";
import { UserAccount } from "../../utilis/DTOs/User";
import { UserAction } from "../actions";
import { AuthenticationActionTypes } from "../index";

export const GetUserInfo = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: AuthenticationActionTypes.GETUSER,
    });
  };
};

export const ClearUserInfo = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: AuthenticationActionTypes.CLEARUSER,
    });
  };
};

export const SetUserInfo = (userAccount: UserAccount) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: AuthenticationActionTypes.SETUSER,
      payload: userAccount,
    });
  };
};

// export const SignnnUser = (userInfo: UserBasicInfo) => {
//   return (dispatch: Dispatch<UserAction>) => {
//     dispatch({
//       type: AuthenticationActionTypes.SINGNIN,
//       payload: {} as UserInfo,
//     });
//   };
// };

// export const IsAuthosizedUser = () => {
//   return (dispatch: Dispatch<UserAction>) => {
//     dispatch({
//       type: AuthenticationActionTypes.AUTHORIZEDUSER,
//       payload: null,
//     });
//   };
// };
