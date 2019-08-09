import { 
	SET_NUTRITION_TARGETS,
	SET_LOGGED_NUTRITION,
	SET_SELECTED_FOOD,
	SET_MEALS,
	SET_WATER_INTAKE,
	ADD_TO_WATER_INTAKE,
} from '../actionTypes';

export const setNutritionTargets = (targets) => {
	return {
		type: SET_NUTRITION_TARGETS,
		targets
	};
}

export const setLoggedNutrition = (logged) => {
	return {
		type: SET_LOGGED_NUTRITION,
		logged
	};
}

export const setMeals = (meals) => {
	return {
		type: SET_MEALS,
		meals
	};
}

export const setSelectedFood = (selectedFood) => {
	return {
		type: SET_SELECTED_FOOD,
		selectedFood
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