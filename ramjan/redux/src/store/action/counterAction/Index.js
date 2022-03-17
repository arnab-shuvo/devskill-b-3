import ActionType from "../../actionType"

export const IncreaseAction = (value) => ({
    type: ActionType.increase,
    payload : value,
})
 
export const DecreaseAction = (value) => ({
    type: ActionType.decrease,
    payload : value,
})