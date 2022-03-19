import {combineReducers} from 'redux';
import { editProductReducer} from './editProductReducer';
import { productReducer } from './productReducer';
import { selectedProductReducer } from './selectedProductReducer';
export const reducers = combineReducers({
    allProducts: productReducer,
    singleProduct: selectedProductReducer,
    productEdit: editProductReducer
})