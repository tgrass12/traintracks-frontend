import * as actions from '../user';
import {
	SET_AUTHENTICATED,
	SET_USER,
	SET_MEALS,
	SET_USERNAME
} from '../../actionTypes';

describe('user actions', () => {
	it('should create an action to set the username', () => {
		const username = 'tyler';
		const expectedAction = {
			type: SET_USERNAME,
			username
		}
		expect(actions.setUsername(username)).toEqual(expectedAction);
	});

	it('should create an action to set authenticated state', () => {
		const expectedAction = {
			type: SET_AUTHENTICATED,
			isAuthenticated: true
		}
		expect(actions.setAuthenticated(true)).toEqual(expectedAction);
	});

	it('should create an action to set the user', () => {
		const user =  {
			username: 'test',
			meals: ['Breakfast', 'Lunch']
		};

		const expectedAction = {
			type: SET_USER,
			data: user
		}
		expect(actions.setUser(user)).toEqual(expectedAction);
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