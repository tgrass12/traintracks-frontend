import { 
	SET_AUTHENTICATED,
	SET_USER,
	SET_USERNAME,
	SET_MEALS,
} from '../actionTypes';

let initialState = {
	isAuthenticated: false,
	data: {},
}

const user = (state=initialState, action) => {
	switch(action.type) {
		case SET_AUTHENTICATED:
			return { ...state, isAuthenticated: action.isAuthenticated };
		case SET_USER:
			return { ...state, data: action.data };
		case SET_USERNAME:
			return { ...state, username: action.username }
		case SET_MEALS: 
			return { ...state, meals: action.meals }
		default:
			return state;
	}
}

export default user;