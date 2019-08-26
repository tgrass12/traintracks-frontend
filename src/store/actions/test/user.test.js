import * as actions from '../user';
import {
	SET_USER,
	SET_MEALS
} from '../../actionTypes';

describe('user actions', () => {
	it('should create an action to set the username', () => {
		const username = 'tyler';
		const expectedAction = {
			type: SET_USER,
			username
		}
		expect(actions.setUser(username)).toEqual(expectedAction);
	});

	it('should create an action to set meals', () => {
		const meals = ['Breakfast', 'Lunch', 'Dinner'];
		const expectedAction = {
			type: SET_MEALS,
			meals
		}
		expect(actions.setMeals(meals)).toEqual(expectedAction);
	});
});