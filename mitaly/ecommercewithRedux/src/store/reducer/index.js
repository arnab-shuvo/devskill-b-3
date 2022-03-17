import {combineReducers} from 'redux';
import setIdReducer from './setIdReducer';
import productReducer from './productReducer';
const reducers =combineReducers({
    setIdStore: setIdReducer,
    productsStore : productReducer,
});
export default reducers;