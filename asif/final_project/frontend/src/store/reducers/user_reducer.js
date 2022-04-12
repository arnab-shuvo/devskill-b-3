import { add_user, logout } from "../action_types";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
const initial_state = {
  user: null,
  token: null,
};

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case add_user:
      return {
        user: { ...action.payload.user },
        token: action.payload.token,
      };
    case logout:
      return {
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

const user_reducer_config = {
  key: "user",
  storage,
};

export default persistReducer(user_reducer_config, reducer);
