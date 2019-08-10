import { combineReducers } from 'redux';
import journal from './journal';

const rootReducer = combineReducers({
	journal,
});

export default rootReducer;