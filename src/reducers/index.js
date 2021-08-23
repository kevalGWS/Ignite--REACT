import {combineReducers} from 'redux';
import gamesReducer from './gamesReducers';   
import detailReducer from './detailReducer';


const rootReducer = combineReducers({
    games : gamesReducer,
    detail: detailReducer,
});

export default rootReducer; 