import {
	UPDATE_WATER_INTAKE,
	SET_WATER_INTAKE,
	UPDATE_NUTRITION
} from '../actionTypes';

export const updateNutrition = (date, nutrition) => {
	return {
		type: UPDATE_NUTRITION,
		date,
		nutrition
	}
}

export const setWaterIntake = (date, waterIntake) => {
	return {
		type: SET_WATER_INTAKE,
		date,
		waterIntake
	};
}

export const updateWaterIntake = (date, waterIntake) => {
	return {
		type: UPDATE_WATER_INTAKE,
		date,
		waterIntake	
	}
}

export const addToWaterIntake = (date, waterIntake) => {
	return async (dispatch, getState) => {
		try {
			const state = getState();
			const user = state.user.username;
			dispatch(updateWaterIntake(date, waterIntake));
			await fetch(`/api/users/${user}/journal/${date}/water`, {
		  		method: 'PATCH',
		  		body: JSON.stringify({ 'waterAmount': waterIntake }),
		  		headers: {
		    		'Content-Type': 'application/json'
		    	}
		    });

		} catch(err) {
			dispatch(updateWaterIntake(date, -waterIntake));
			let error = new Error('Error setting water intake');
			error.inner = err;
			throw error;

		}
	}
}

export const fetchWaterIntake = (date) => {
	return (dispatch, getState) => {
		const state = getState();
		const user = state.user.username;
		return fetch(`/api/users/${user}/journal/${date}/water`)
			.then(res => res.json())
			.then(res => dispatch(setWaterIntake(res.water)));
	}
}
