import * as actions from '../workoutLog';
import {
	ADD_EXERCISE,
} from '../../actionTypes';

describe('workoutLog actions', () => {

	const date = '2019-07-04';

	it('should create an action to update exercises', () => {
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