import { UserAccount } from "../../utilis/DTOs/User";
import { UserAction } from "../actions";
import { AuthenticationActionTypes } from "../index";

const inittialState: UserAccount = {
  authorized: false,
  role: null,
  token: null,
  expireDate: null,
  user: null,
};

const UserReducer = (
  state: UserAccount = inittialState,
  action: UserAction
) => {
  switch (action.type) {
    case AuthenticationActionTypes.GETUSER:
      return state;
    case AuthenticationActionTypes.CLEARUSER:
      return {
        user: null,
        authorized: false,
        expireDate: null,
        role: null,
        token: null,
      };
    case AuthenticationActionTypes.SETUSER:
      return action.payload;
    default:
      return state;
  }
};

export default UserReducer;
