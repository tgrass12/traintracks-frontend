import { getCurrentDate } from '../../shared/util';

import { 
	SET_SELECTED_DATE,
	SET_NUTRITION_JOURNAL,
	SET_WATER_INTAKE,
	ADD_TO_WATER_INTAKE
} from '../actionTypes';

let initialState = {
	'selectedDate': getCurrentDate(),
	'nutrition': {
		targets: {
			'cals': 0,
			'macros': {
				'protein': 0,
				'carbs': {
					'total': 0
				},
				'fats': {
					'total': 0
				}
			}
		},
		logged: {
			'cals': 0,
			'macros': {
				'protein': 0,
				'carbs': {
					'total': 0
				},
				'fats': {
					'total': 0
				}		
			},
		},
		meals: [],
		water: 0,
		}
}

const journal = (state=initialState, action) => {
	switch(action.type) {
		case SET_SELECTED_DATE:
			return { ...state, 'selectedDate': action.selectedDate };
		case SET_NUTRITION_JOURNAL:
			return { 
				...state,
				'nutrition': action.entry
			};
		case SET_WATER_INTAKE:
			return { ...state, 'nutrition.water': action.waterIntake };
		case ADD_TO_WATER_INTAKE:
			return { 
				...state, 
				'nutrition': {
					...state.nutrition,
					'water': state.nutrition.water + action.waterIntake
				}
			};
		default:
			return state;
	}
} 

export default journal;