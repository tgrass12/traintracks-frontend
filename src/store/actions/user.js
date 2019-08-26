import { 
	SET_USER,
	SET_MEALS,
} from '../actionTypes';

export const setUser = (username) => {
	return {
		type: SET_USER,
		username
	}
}

export const setMeals = (meals) => {
	return {
		type: SET_MEALS,
		meals
	}
}