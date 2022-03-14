export const InitialState = { counter: 0 };

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "increament":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decreament":
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
