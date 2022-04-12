import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "..";
import { UserActionCreators } from "../action-creators";

export const useUserDispatch = () => {
  const actions = bindActionCreators(UserActionCreators, useDispatch());
  const user = useSelector((state: State) => state.user);
  return { ...actions, user };
};
