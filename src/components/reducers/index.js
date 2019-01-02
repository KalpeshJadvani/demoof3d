import { combineReducers } from 'redux';
import cartData from './cartData';

const rootReducers = combineReducers({
    cartdata : cartData
});

export default rootReducers;