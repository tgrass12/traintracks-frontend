import { GET_MAX, SET_MAX } from '../actionTypes';

const max = (state = 0, action) => {
	switch(action.type) {
		case GET_MAX:
			return state.max;
		case SET_MAX:
			return action.max;
		default:
			return state;

	}
}

export default max;