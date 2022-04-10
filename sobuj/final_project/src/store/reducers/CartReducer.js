import ActionType from "../ActionType";

const initialState ={
    cart:[],
}

const CartReducer = (state = initialState, action)=>{
    const product = action.payload;
    switch (action.type) {
        case ActionType.ADD_TO_CART:
            //Checking user is logged in or not?

            //Check if the Product is already in cart
            const exist = state.find((x)=>x.id=== product._id)
            if(exist){
                //increase the Quantity
                return state.map((x)=>
                    x.id === product._id ? {...x, qty: x.qty+1 } : x
                );
            }else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        qty:1,
                    }
                ]
            }
        break;
        
        case ActionType.DEL_FROM_CART:
            const exist1 = state.find((x) => x.id === product._id);
            if(exist1.qty ===1){
                return state.filter((x)=> x.id !== exist1.id);
            }else{
                return state.map((x)=>
                    x.id=== product._id ? {...x, qty: x.qty-1} : x
                );
            }
            break;
            
        default:
            break;
    }
}

export default CartReducer;