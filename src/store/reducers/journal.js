import { getCurrentDate } from '../../shared/util';

import { 
	SET_SELECTED_DATE,
	SET_NUTRITION_JOURNAL,
	SET_WATER_INTAKE,
	UPDATE_WATER_INTAKE,
	ADD_EXERCISE
} from '../actionTypes';

let initialState = {
	selectedDate: getCurrentDate(),
	[getCurrentDate()]: {
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
			meals: [],
			water: 0,
		},
		workouts: []
	}
}

const journal = (state=initialState, action) => {
	switch(action.type) {
		case SET_SELECTED_DATE:
			return { ...state, 'selectedDate': action.selectedDate };
		case SET_NUTRITION_JOURNAL:
			//TODO: Refactor this
			console.log(state)
			return { 
				...state,
				[action.date]: {
					'nutrition': {
						...state[action.date].nutrition, 
						...action.entry.nutrition
					},
					'workouts': action.entry.workouts
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
					'workouts': [...state[action.date].workouts, action.exercise]
				}
			};
		default:
			return state;
	}
} 

export default journal;