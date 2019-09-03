import { getCurrentDate } from '../../shared/util';

import { 
	SET_SELECTED_DATE,
	RECEIVE_JOURNAL_SUCCESS,
	RECEIVE_JOURNAL_EMPTY,
	UPDATE_NUTRITION,
	SET_WATER_INTAKE,
	UPDATE_WATER_INTAKE,
	ADD_EXERCISE
} from '../actionTypes';

let emptyJournal = {
	nutrition: {
		target: {
			cals: 0,
			macros: {
				carbs: {
					total: 0
				},
				protein: 0,
				fats: {
					total: 0
				}
			}
		},
		meals: [
			{ 'name': 'Breakfast' }, 
			{ 'name': 'Lunch' },
			{ 'name': 'Dinner' }
		],
		water: 0,
	},
	workouts: []
};

let initialState = {
	selectedDate: getCurrentDate(),
	[getCurrentDate()]: emptyJournal
};

let setNutrition = (state, action) => {
	if (action.entry.nutrition)
		return action.entry.nutrition;

	if (state[action.date] && state[action.date].nutrition)
		return state[action.date].nutrition;

	return emptyJournal.nutrition;
}

let setWorkouts = (state, action) => {
	if (action.entry.workouts)
		return action.entry.workouts;

	if (state[action.date] && state[action.date].workouts)
		return state[action.date].workouts;

	return emptyJournal.workouts;	
}

const journal = (state=initialState, action) => {
	switch(action.type) {
		case SET_SELECTED_DATE:
			return { 
				...state,
				'selectedDate': action.selectedDate 
			};
			
		case RECEIVE_JOURNAL_SUCCESS:
			let nutrition = setNutrition(state, action);
			let workouts = setWorkouts(state, action);
			return { 
				...state,
				[action.date]: {
					...state[action.date],
					'nutrition':  nutrition,
					'workouts': workouts
				}
			};

		case RECEIVE_JOURNAL_EMPTY:
			return {
				...state,
				[action.date]: emptyJournal
			};

		case UPDATE_NUTRITION:
			return {
				...state,
				[action.date]: {
					...state[action.date],
					'nutrition': action.nutrition
				}
			};

		case SET_WATER_INTAKE:
			return { 
				...state, 
				[action.date]: {
					'nutrition':  {
						...state[action.date].nutrition,
						'water': action.waterIntake 
					}
				}
			};

		case UPDATE_WATER_INTAKE:
			return { 
				...state, 
				[action.date]: {
					'nutrition': {
						...state[action.date].nutrition,
						'water': state[action.date].nutrition.water + action.waterIntake
					}
				}
			};

		case ADD_EXERCISE: 
			return {
				...state,
				[action.date]: {
					...state[action.date],
					'workouts': [
						...state[action.date].workouts,
						action.exercise
					]
				}
			};

		default:
			return state;
	}
} 

export default journal;