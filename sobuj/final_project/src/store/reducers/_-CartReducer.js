// import * as types from '../actions/action-types';
import ActionType from '../ActionType';

const initialState ={
    cart:[],
}

const cartReducer = (state = initialState, action) => {
  let doesItemExist;
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      doesItemExist = false;
      const newState = state.map((item) => {
        if (item.Id === action.payload.Id) {
          item.quantity += 1;
          doesItemExist = true;
        }
        return item;
      });
      if (doesItemExist) {
        return newState;
      }
      return [...state, {...action.payload, quantity: 1}];

    case ActionType.REMOVE_FROM_CART:
      const newCartState = state.filter((item) => {
        if (item.Id === action.productId) {
          return false;
        }
        return true;
      });
      return newCartState;

    case ActionType.UPDATE_CART:
      const cartFormArr = Object.keys(action.payload).map((key, index) => {
        return action.payload[key];
      });

      doesItemExist = false;

      const newProdCartState = state.map((item) => {
        let itemFound = cartFormArr.find((element) => element.Id === item.Id);
        if (itemFound) {
          item.quantity = itemFound.quantity;
          doesItemExist = true;
        }
        return item;
      });

      if (doesItemExist) {
        return newProdCartState;
      }

      return state;

    default:
      return state;
  }
}

export default cartReducer;