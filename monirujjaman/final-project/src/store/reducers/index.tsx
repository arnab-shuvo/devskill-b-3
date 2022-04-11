/// <reference types="redux-persist" />
import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import UserReducer from "./UserReducer";

// export const userPersistResucer = persistReducer(
//   {
//     key: "root-user",
//     storage,
//   },
//   UserReducer
// );

// const productCartReducer = persistReducer(
//   {
//     key: "root-product-cart",
//     storage,
//   },
//   ProductCartReducer
// );

const userPersist = persistReducer(
  {
    key: "root-user",
    storage,
  },
  UserReducer
);

const Reducers = combineReducers({
  user: userPersist,
});

export default Reducers;

export type State = ReturnType<typeof Reducers>;

// export const useUserDispatch = () => {
//   const dispatch = useDispatch();
//   const actions = bindActionCreators(TestActionCreators, dispatch);
//   const user = useSelector((state: State) => state.user);
//   return {
//     actions,
//     user,
//   };
// };

// export const useProductCartDispatch = () => {
//   const dispatch = useDispatch();
//   const actions = bindActionCreators(ProeuctCartActionCreators, dispatch);
//   const productCart = useSelector((state: State) => state.prodcutCart);
//   return {
//     actions,
//     productCart,
//   };
// };
