import { 
	SET_USER,
	SET_MEALS,
	SET_USERNAME,
	FETCH_MEALS
} from '../actionTypes';

export const setUser = (user) => {
	return {
		type: SET_USER,
		user
	}
}

export const setUsername = (username) => {
	return {
		type: SET_USERNAME,
		username
	}
}

export const setMeals = (meals) => {
	return {
		type: SET_MEALS,
		meals
	}
}

export const beginFetchMeals = (username) => {
	return {
		type: FETCH_MEALS,
		username
	}
}

const shouldFetchMeals = (state) => {
	return state.user.meals.length === 0;
}

export const fetchMeals = () => {
	return (dispatch, getState) => {
		const state = getState();
		const user = state.user.username;

		if (!shouldFetchMeals(state)) {
			return Promise.resolve(state.user.meals);
		}

		dispatch(beginFetchMeals(user));

		const api = `/api/users/${user}/meals`;
		return fetch(api).then(res => res.json())
		.then(meals => meals.map(m => { return { 'name': m } }))
		.then(meals => dispatch(setMeals(meals)));
	}
};

export const fetchUser = (username) => {
	return (dispatch) => {
		const api = `/api/users/${username}`;

		return fetch(api).then(res => res.json())
		.then(user => {
			dispatch(setUser(user))
		});
	}
}