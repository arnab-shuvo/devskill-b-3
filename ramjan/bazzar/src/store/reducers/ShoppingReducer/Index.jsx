import ActionType from "../../ActionType";

const productListAPI = async () => {
    try {
        const res = await fetch(`http://localhost:8080/products`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}


const initialState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0,
}

const shopReducer = (state = initialState, action) => {
    let findPro;
    let index;
    switch (action.type) {

        case ActionType.ADD_TO_CART:
            const { product, quantity } = action.payload;
            // console.log(typeof(product._id))
            const check = state.products.find((pr) => pr._id === product._id )
           
            if (check) {
                return state;
            } else {
                const tPrice = state.totalPrice + product.price * quantity;
                const tQuantites = state.totalQuantities + quantity;
                product.quantity = quantity; 
                return {
                    ...state, products: [...state.products, product], totalPrice: tPrice, totalQuantities: tQuantites,
                }
            }
        case 'INC':
            findPro = state.products.find(product => product._id === action.payload);
            index = state.products.findIndex(product => product._id === action.payload);
            findPro.quantity += 1;
            state.products[index] = findPro;
            return {
                ...state,
                totalPrice: state.totalPrice + findPro.price, totalQuantities: state.totalQuantities + 1
            }
        case 'DEC':
            findPro = state.products.find(product => product._id === action.payload);
            index = state.products.findIndex(product => product._id === action.payload);
            if (findPro.quantity>1) {
                findPro.quantity -= 1;
                state.products[index] = findPro;
                return {
                    ...state,
                    totalPrice: state.totalPrice-findPro.price, totalQuantities : state.totalQuantities -1
                }
            } else {
                return state;
            }
        case 'REMOVE':
            findPro = state.products.find(product => product._id === action.payload);
            const filtered = state.products.filter(product => product._id !== action.payload);
            return {
                ...state,
                products: filtered,
                totalPrice: state.totalPrice - findPro.price * findPro.quantity,
                totalQuantities: state.totalQuantities - findPro.quantity
            }
            
        default:
            return state;
       
        }  
}


export default shopReducer;