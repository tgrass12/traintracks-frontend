import * as actions from '../workoutLog';
import {
	ADD_EXERCISE,
} from '../../actionTypes';

describe('workoutLog actions', () => {

	const date = '2019-07-04';
	const exercise = {
		'exerciseName': 'Squat',
		'weight': 135,
		'sets': 3,
		'reps': 8
	};

	it('should create an action to update exercises', () => {
		const expectedAction = {
			type: ADD_EXERCISE,
			date,
			exercise
		}
		expect(actions.updateExercise(date, exercise))
			.toEqual(expectedAction);
	});

	it('addExercise should POST with valid params', async () => {
		jest.spyOn(global, 'fetch');
		const getState = jest.fn(() => ({
			user: { 
				data: { 
					username: 'test' 
				}
			}
		}));

		await actions.addExercise(date, exercise)(jest.fn(), getState);
		expect(fetch.mock.calls[0][1].body).toEqual(JSON.stringify(exercise));
		expect(fetch.mock.calls[0][0])
			.toEqual(`/api/users/test/journal/${date}/workouts`);
	})
});