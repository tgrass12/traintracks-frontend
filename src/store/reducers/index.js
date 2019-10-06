import { combineReducers } from 'redux';
import journal from './journal';
import user from './user';
import { LOGOUT_USER } from '../actionTypes';

const appReducer = combineReducers({
	journal,
	user
});

const rootReducer = (state, action) => {
	if (action.type === LOGOUT_USER) {
		state = undefined;
	}

	return appReducer(state, action);
}

export default rootReducer;