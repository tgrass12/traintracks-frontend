import { 
	getCurrentDate,
	setToNextDay, 
} from '../../../shared/util';

import journalReducer from '../journal';
import { 
	SET_SELECTED_DATE,
	RECEIVE_JOURNAL_SUCCESS,
	RECEIVE_JOURNAL_EMPTY,
	SET_WATER_INTAKE,
	UPDATE_WATER_INTAKE,
	ADD_EXERCISE
} from '../../actionTypes';

const initialState = {
	selectedDate: getCurrentDate(),
	[getCurrentDate()]: {
		nutrition: {
			targets: {
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

const mockEmptyJournal = {
	selectedDate: getCurrentDate(),
	[getCurrentDate()]: {
		nutrition: {
			targets: {
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
	},
	[setToNextDay(getCurrentDate())]: {
		nutrition: {
			targets: {
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
	}
}

const mockFinalJournal = {
	selectedDate: getCurrentDate(),
	[getCurrentDate()]: {
		nutrition: {
			targets: {
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
	},
	[setToNextDay(getCurrentDate())]: {
		nutrition: {
			targets: {
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
		meals: [
			{ 'name': 'Breakfast' }, 
			{ 'name': 'Lunch' },
			{ 'name': 'Dinner' }
		],
			water: 32,
		},
		workouts: []
	},
}

const mockJournalEntry = {
	nutrition: {
		targets: {
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
	meals: [
		{ 'name': 'Breakfast' }, 
		{ 'name': 'Lunch' },
		{ 'name': 'Dinner' }
	],
		water: 32,
	},
	workouts: []
};

describe('journal reducer', () => {
	it('should handle default state', () => {
		expect(journalReducer(undefined, {})).toEqual(initialState);
	});

	it('should handle SET_SELECTED_DATE', () => {
		const selectedDate = setToNextDay(getCurrentDate());
		const action = {
			type: SET_SELECTED_DATE,
			selectedDate
		} 

		expect(journalReducer(initialState, action).selectedDate)
			.toEqual(selectedDate);
	});

	it('should handle RECEIVE_JOURNAL_SUCCESS', () => {
		const date = setToNextDay(getCurrentDate());
		const action = {
			type: RECEIVE_JOURNAL_SUCCESS,
			date,
			entry: mockJournalEntry
		}

		expect(journalReducer(initialState, action))
			.toEqual(mockFinalJournal);
	});

	it('should handle RECEIVE_JOURNAL_EMPTY', () => {
		const date = setToNextDay(getCurrentDate());
		const meals = ['Breakfast', 'Lunch', 'Dinner'];
		const targets = { 
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
		};
		const action = {
			type: RECEIVE_JOURNAL_EMPTY,
			date,
			meals,
			targets
		};

		expect(journalReducer(initialState, action))
			.toEqual(mockEmptyJournal);
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
		const date = setToNextDay(getCurrentDate());
		const action = {
			type: UPDATE_WATER_INTAKE,
			date,
			waterIntake
		}
		expect(journalReducer(mockFinalJournal, action)[date].nutrition.water)
			.toEqual(40);
	});

	it('should handle ADD_EXERCISE', () => {
		const date = getCurrentDate();
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
		expect(journalReducer(initialState, action)[date].workouts.length)
			.toEqual(1);
	});
});