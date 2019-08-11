import { 
	SET_SELECTED_DATE,
	SET_NUTRITION_JOURNAL,
	ADD_TO_WATER_INTAKE,
	SET_WATER_INTAKE,
} from '../actionTypes';

export const setSelectedDate = function(selectedDate) {
	return {
		type: SET_SELECTED_DATE,
		selectedDate
	};
}

export const setNutritionJournal = function(entry) {
	return {
		type: SET_NUTRITION_JOURNAL,
		entry
	}
}

export const fetchJournal = function(date) {
	return dispatch => {
		let apiUrl = `/api/users/tyler/journal/${date}`;
		return fetch(apiUrl).then(res => res.json())
			.then(entry => {
				dispatch(setNutritionJournal(entry));
			});
	}
}

export const setWaterIntake = (waterIntake) => {
	return {
		type: SET_WATER_INTAKE,
		waterIntake
	};
}

export const addToWaterIntake = (date, waterIntake) => {
	return async dispatch => {
		try {
			await fetch(`/api/users/tyler/journal/${date}/water`, {
		  		method: 'PATCH',
		  		body: JSON.stringify({ 'waterAmount': waterIntake }),
		  		headers: {
		    		'Content-Type': 'application/json'
		    	}
		    });
			dispatch({
				type: ADD_TO_WATER_INTAKE,
				waterIntake
			});

		} catch(err) {
			const error = new Error('Error setting water intake');
			error.inner = err;
			throw error;

		}
	}
}

export const fetchWaterIntake = (date) => {
	return dispatch => {
		return fetch(`/api/users/tyler/journal/${date}/water`)
			.then(res => res.json())
			.then(res => dispatch(setWaterIntake(res.water)));
	}
}