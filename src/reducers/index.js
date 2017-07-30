import { combineReducers } from 'redux';
import cart from './cart';
import registration from './registration-reducer';

const rootReducer = combineReducers({
    cart,
    registration
});
export default rootReducer;