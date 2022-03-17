import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators, combineReducers } from "redux";
import { actionCreators } from "..";
import Reducer from "./ProductReducer";

const Reducers = combineReducers({
  products: Reducer,
});

export default Reducers;

export type State = ReturnType<typeof Reducers>;

export const useProductDispatch = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  const products = useSelector((state: State) => state.products);
  return {
    actions,
    products,
  };
};
