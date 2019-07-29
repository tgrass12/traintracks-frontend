import { GET_MAX, SET_MAX } from '../actionTypes';

export const getMax = () => {
	return {
		type: GET_MAX
	}
}

export const setMax = (max) => {
	return {
		type: SET_MAX,
		max
	}
}