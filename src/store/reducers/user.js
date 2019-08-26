import { SET_USER } from '../actionTypes';

let initialState = {
	username: 'tyler'
}

const user = (state=initialState, action) => {
	switch(action.type) {
		case SET_USER:
			return { ...state, username: action.username }
		default:
			return state;
	}
}

export default user;