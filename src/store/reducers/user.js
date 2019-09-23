import { 
	SET_USER,
	SET_USERNAME,
	SET_MEALS,
} from '../actionTypes';

let initialState = {
	username: 'tyler',
	meals: []
}

const user = (state=initialState, action) => {
	switch(action.type) {
		case SET_USER:
			return action.user;
		case SET_USERNAME:
			return { ...state, username: action.username }
		case SET_MEALS: 
			return { ...state, meals: action.meals }
		default:
			return state;
	}
}

export default user;