import {combineReducers} from 'redux';
import { productReducer } from './productReducer';
import { selectedProductReducer } from './selectedProductReducer';
export const reducers = combineReducers({
    allProducts: productReducer,
    singleProduct: selectedProductReducer
})