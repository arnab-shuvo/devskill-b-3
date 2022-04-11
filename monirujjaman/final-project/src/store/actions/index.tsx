import { UserAccount } from "../../utilis/DTOs/User";
import { AuthenticationActionTypes, ProductCartActionTypes } from "../index";

export interface GetUserAction {
  type: AuthenticationActionTypes.GETUSER;
}

export interface ClearUserAction {
  type: AuthenticationActionTypes.CLEARUSER;
}

export interface SetUserAction {
  type: AuthenticationActionTypes.SETUSER;
  payload: UserAccount;
}

// interface SingninUserAction {
//   type: AuthenticationActionTypes.SINGNIN;
//   payload: UserInfo;
// }

// interface SignupUserAction {
//   type: AuthenticationActionTypes.SIGNUP;
//   payload: null;
// }

// interface CheckAuthorizedUser {
//   type: AuthenticationActionTypes.AUTHORIZEDUSER;
//   payload: null;
// }

interface AddProductToCart {
  type: ProductCartActionTypes.ADDTOCART;
  payload: string;
}

interface RemoveProductFromCart {
  type: ProductCartActionTypes.REMOVEFROMCART;
  payload: null;
}

export type UserAction = GetUserAction | ClearUserAction | SetUserAction;
//export GetUserInfoAction;

export type ProductCartAction = AddProductToCart | RemoveProductFromCart;
