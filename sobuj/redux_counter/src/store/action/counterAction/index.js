import ActionType from "../actionType";


export const increaseAction = (value) => ({
    type: ActionType.increase,
    payload: value,
});

export const decreaseAction = (value) => ({
    type: ActionType.decrease,
    payload: value,
});