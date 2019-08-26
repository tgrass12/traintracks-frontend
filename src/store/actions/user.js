import { SET_USER } from '../actionTypes';

export const setUser = (username) => {
	return {
		type: SET_USER,
		username
	}
}