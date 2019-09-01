import * as actions from '../journal';
import {
	SET_NUTRITION_JOURNAL,
	SET_SELECTED_DATE,
	SET_WATER_INTAKE,
	UPDATE_WATER_INTAKE,
	ADD_EXERCISE
} from '../../actionTypes';

describe('journal actions', () => {
	it('should create an action to set the date', () => {
		const selectedDate = '2019-07-02';
		const expectedAction = {
			type: SET_SELECTED_DATE,
			selectedDate
		}
		expect(actions.setSelectedDate(selectedDate)).toEqual(expectedAction);
	});

	it('should create an action to set the nutrition journal', () => {
		const date = '2019-07-02';
		const entry = {
			meals: ['Breakfast', 'Lunch', 'Dinner'],
			targets: {},
			water: 64
		}
		const expectedAction = {
			type: SET_NUTRITION_JOURNAL,
			date,
			entry
		};

		expect(actions.setNutritionJournal(date, entry))
			.toEqual(expectedAction);
	});

	it('should create an action to set water intake', () => {
		const date = '2019-07-02';
		const waterIntake = 24;
		const expectedAction = {
			type: SET_WATER_INTAKE,
			date,
			waterIntake
		}
		expect(actions.setWaterIntake(date, waterIntake))
			.toEqual(expectedAction);
	});

	it('should create an action to add to the water intake', () => {
		const date = '2019-07-02';
		const waterIntake = 24;
		const expectedAction = {
			type: UPDATE_WATER_INTAKE,
			date,
			waterIntake
		}
		expect(actions.updateWaterIntake(date, waterIntake))
			.toEqual(expectedAction);
	});

	it('should create an action to update exercises', () => {
		const date = '2019-07-02';
		const exercise = {
			'exerciseName': 'Squat',
			'weight': 135,
			'sets': 3,
			'reps': 8
		}
		const expectedAction = {
			type: ADD_EXERCISE,
			date,
			exercise
		}
		expect(actions.updateExercise(date, exercise))
			.toEqual(expectedAction);
	});
});