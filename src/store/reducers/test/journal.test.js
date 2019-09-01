import { getCurrentDate } from '../../../shared/util';

import journalReducer from '../journal';
import { 
	SET_SELECTED_DATE,
	SET_NUTRITION_JOURNAL,
	SET_WATER_INTAKE,
	UPDATE_WATER_INTAKE,
	ADD_EXERCISE
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
		},
		workouts: []
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
		},
		workouts: []
	}
}

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
		const date = '2019-07-02';
		const action = {
			type: SET_NUTRITION_JOURNAL,
			date,
			entry: mockJournal
		}
		expect(journalReducer(initialState, action)[date])
			.toEqual(mockJournal);
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

	it('should handle ADD_EXERCISE', () => {
		const date = '2019-07-02';
		const exercise = {
			'exerciseName': 'Squat',
			'weight': 135,
			'sets': 3,
			'reps': 8
		};
		const action = {
			type: ADD_EXERCISE,
			date,
			exercise
		};
		expect(journalReducer(mockJournal, action)[date].workouts.length)
			.toEqual(1);
	});
});