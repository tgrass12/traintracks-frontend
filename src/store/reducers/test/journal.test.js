import { getCurrentDate } from '../../../shared/util';

import journalReducer from '../journal';
import { 
	SET_SELECTED_DATE,
	SET_NUTRITION_JOURNAL,
	SET_WATER_INTAKE,
	UPDATE_WATER_INTAKE
} from '../../actionTypes';

const initialState = {
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

const mockJournal = {
	selectedDate: getCurrentDate(),
	'2019-07-02': {
		nutrition: {
			target: {
				cals: 2000,
				macros: {
					carbs: {
						total: 400
					},
					protein: 150,
					fats: {
						total: 45
					}
				}
			},
			meals: ['Breakfast', 'Lunch', 'Dinner'],
			water: 32,
		}
	}
}

const mockNutritionEntry = {
	nutrition: {
		target: {
			cals: 2000,
			macros: {
				carbs: {
					total: 400
				},
				protein: 150,
				fats: {
					total: 45
				}
			}
		},
		meals: ['Breakfast', 'Lunch', 'Dinner'],
		water: 32,
	}
};

describe('journal reducer', () => {
	it('should handle default state', () => {
		expect(journalReducer(undefined, {})).toEqual(initialState);
	});

	it('should handle SET_SELECTED_DATE', () => {
		const selectedDate = '2019-07-02';
		const action = {
			type: SET_SELECTED_DATE,
			selectedDate
		} 

		expect(journalReducer(initialState, action).selectedDate)
			.toEqual(selectedDate);
	});

	it('should handle SET_NUTRITION_JOURNAL', () => {
		const date = '2019-07-03';
		const action = {
			type: SET_NUTRITION_JOURNAL,
			date,
			entry: mockNutritionEntry.nutrition
		}
		expect(journalReducer(initialState, action)[date])
			.toEqual(mockNutritionEntry);
	});

	it('should handle SET_WATER_INTAKE', () => {
		const waterIntake = 24;
		const date = getCurrentDate();
		const action = {
			type: SET_WATER_INTAKE,
			date,
			waterIntake
		}
		expect(journalReducer(initialState, action)[date].nutrition.water)
			.toEqual(waterIntake);
	});

	it('should handle UPDATE_WATER_INTAKE', () => {
		const waterIntake = 8;
		const date = '2019-07-02';
		const action = {
			type: UPDATE_WATER_INTAKE,
			date,
			waterIntake
		}
		expect(journalReducer(mockJournal, action)[date].nutrition.water)
			.toEqual(40);
	});
});