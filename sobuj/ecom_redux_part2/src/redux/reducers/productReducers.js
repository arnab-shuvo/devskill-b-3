import { ActionTypes } from "@mui/base"

const initialState = {
    products:[{
        id: 1,
        title: "Dispatch",
        category: "programmer"
    }]
}
export const productReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}