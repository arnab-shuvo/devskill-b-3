import ActionType from "../ActionType";
import axios from "axios";

export const checkoutAction = (checkout) =>({
    type: ActionType.CHECKOUT,
    payload: checkout,
});
