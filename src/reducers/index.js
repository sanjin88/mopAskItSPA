import { combineReducers } from 'redux';
import cart from './cart';
import registration from './registration-reducer';
import user from './user-reducer';
import myQuestions from './my-questions-reducers';
import questions from './questions-reducer';

const rootReducer = combineReducers({
    cart,
    registration,
    user,
    myQuestions,
    questions
});
export default rootReducer;