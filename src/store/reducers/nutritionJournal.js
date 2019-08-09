import { 
	SET_NUTRITION_TARGETS,
	SET_LOGGED_NUTRITION,
	SET_MEALS,
	SET_SELECTED_FOOD,
	SET_WATER_INTAKE,
	ADD_TO_WATER_INTAKE
} from '../actionTypes';

const initialState = {
	targets: {
		'cals': 2000,
		'macros': {
			'protein': 150,
			'carbs': {
				'total': 250
			},
			'fats': {
				'total': 44.4
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
	selectedFood: {}
};

const nutritionJournal = (state = initialState, action) => {
	switch(action.type) {
		case SET_NUTRITION_TARGETS:
			return {...state, 'targets': action.targets};
		case SET_LOGGED_NUTRITION:
			return {...state, 'logged': action.logged};
		case SET_MEALS:
			return {...state, 'meals': action.meals};
		case SET_SELECTED_FOOD: 
			return {...state, 'selectedFood': action.selectedFood};
		case SET_WATER_INTAKE:
			return {...state, 'water': action.waterIntake};
			case ADD_TO_WATER_INTAKE:
			return {...state, 'water': state.water + action.waterIntake};
		default:
			return state;
	}
}

export default nutritionJournal;