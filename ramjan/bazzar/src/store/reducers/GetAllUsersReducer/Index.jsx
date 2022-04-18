import ActionType from "../../ActionType";
const initialState = {
  Users :[]  
}

const allUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.getAllUser:
            return { ...state, Users: action.payload };
        default:
            return state;
        }  
}
export default allUserReducer;