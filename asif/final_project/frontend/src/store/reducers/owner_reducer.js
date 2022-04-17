import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage/session";
import { add_owner, remove_owner } from "../action_types";
const initial_state = {
  owner: null,
  token: null,
};

const owner_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case add_owner:
      return {
        owner: action.payload.owner,
        token: action.payload.token,
      };
    case remove_owner:
      return {
        owner: null,
        token: null,
      };
    default:
      return state;
  }
};
const owner_reducer_config = {
  key: "owner",
  storage,
};

export default persistReducer(owner_reducer_config, owner_reducer);
