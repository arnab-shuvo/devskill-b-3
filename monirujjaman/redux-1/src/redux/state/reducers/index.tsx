import {combineReducers} from 'redux';
import Reducer from './CounterReducer';

const reducers = combineReducers({
    counter: Reducer
});

export default reducers;

export type State = ReturnType<typeof reducers>