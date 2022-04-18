import ActionType from "../../ActionType";

export const addToCart = (data) => {
   console.log(data, 'action')
    return {
        type: ActionType.ADD_TO_CART,
    payload: {
        data: data,
    }
    }
    
}

// export const getProductListAction = () => { 
//     return async (dispatch) => {
//         const data = await productListAPI();
//         dispatch(addToCart(data))
//     }
// }


export const removeFromCart= (itemID) => ({
    type: ActionType.REMOVE_FROM_CART,
    payload: {
        id: itemID,
    }
})

export const adjustQtty= (itemID, value) => ({
    type: ActionType.ADJUST_QUANTITY,
    payload: {
        id: itemID,
        qty: value,
    }
})
export const loadCurrentItem= (item) => ({
    type: ActionType.LOAD_CURRENT_ITEM,
    payload: item,
})

