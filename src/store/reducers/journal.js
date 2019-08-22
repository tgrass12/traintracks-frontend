import { getCurrentDate } from '../../shared/util';

import { 
	SET_SELECTED_DATE,
	SET_NUTRITION_JOURNAL,
	SET_WATER_INTAKE,
	ADD_TO_WATER_INTAKE
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
		}
	}
}

const journal = (state=initialState, action) => {
	switch(action.type) {
		case SET_SELECTED_DATE:
			return { ...state, 'selectedDate': action.selectedDate };
		case SET_NUTRITION_JOURNAL:
			return { 
				...state,
				[action.date]: {
					'nutrition': action.entry
				}
			};
		case SET_WATER_INTAKE:
			return { ...state, 'nutrition.water': action.waterIntake };
		case ADD_TO_WATER_INTAKE:
			return { 
				...state, 
				[action.date]: {
					'nutrition': {
						...state.entries[action.date].nutrition,
						'water': state.entries[action.date].nutrition.water + action.waterIntake
					}
				}
			};
		default:
			return state;
	}
} 

export default journal;