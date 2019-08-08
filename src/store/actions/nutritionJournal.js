import { 
	SET_NUTRITION_TARGETS,
	SET_LOGGED_NUTRITION,
	SET_SELECTED_FOOD,
	SET_MEALS,
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