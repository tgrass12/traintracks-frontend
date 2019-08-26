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

export const setNutritionJournal = function(date, entry) {
	return {
		type: SET_NUTRITION_JOURNAL,
		date,
		entry
	}
}

export const fetchJournal = function(date) {
	return (dispatch, getState) => {
		const state = getState();
		if (state.journal[date] && 
			state.journal[date].nutrition.logged) {
			let entry = state.journal[date];
			return Promise.resolve().then(() => {
				dispatch(setNutritionJournal(date, entry.nutrition));
				dispatch(setSelectedDate(date));
			});
		}
		const user = state.user.username;
		let apiUrl = `/api/users/${user}/journal/${date}`;
		return fetch(apiUrl).then(res => res.json())
			.then(nutritionEntry => {
				dispatch(setNutritionJournal(date, nutritionEntry));
				dispatch(setSelectedDate(date));
			});
	}
}

export const setWaterIntake = (date, waterIntake) => {
	return {
		type: SET_WATER_INTAKE,
		date,
		waterIntake
	};
}

export const addToWaterIntake = (date, waterIntake) => {
	return async (dispatch, getState) => {
		try {
			const state = getState();
			const user = state.user.username;
			await fetch(`/api/users/${user}/journal/${date}/water`, {
		  		method: 'PATCH',
		  		body: JSON.stringify({ 'waterAmount': waterIntake }),
		  		headers: {
		    		'Content-Type': 'application/json'
		    	}
		    });
			dispatch({
				type: ADD_TO_WATER_INTAKE,
				date,
				waterIntake
			});

		} catch(err) {
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