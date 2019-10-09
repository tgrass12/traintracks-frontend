import Cookies from 'universal-cookie';
import { 
	SET_USER_LOADING,
	LOGOUT_USER,
	SET_AUTHENTICATED,
	SET_USER,
	SET_MEALS,
	SET_USERNAME,
	FETCH_MEALS
} from '../actionTypes';

export const refreshSession = () => {
	return (dispatch) => {
		dispatch(setUserLoading(true));
		const api = '/api/auth/session';
		fetch(api).then(res => res.json())
		.then(user => {
			if (!user) {
				// Something happened to the session. Reset cookie.
				let cookies = new Cookies();
				cookies.remove('connect.sid');
			}
			else {
				dispatch(setAuthenticated(true));
				dispatch(setUser(user));
				dispatch(setUserLoading(false));
			}
		});
	}
}

export const logoutUser = () => {
	return {
		type: LOGOUT_USER
	}
}

export const setUserLoading = (isLoading) => {
	return {
		type: SET_USER_LOADING,
		isLoading
	}
}

export const setAuthenticated = (isAuthenticated) => {
	return {
		type: SET_AUTHENTICATED,
		isAuthenticated
	}
}

export const setUser = (user) => {
	return {
		type: SET_USER,
		data: user
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
		dispatch(setUserLoading(true));
		return fetch(api).then(res => res.json())
		.then(user => {
			dispatch(setUser(user))
			dispatch(setUserLoading(false));
		});
	}
}