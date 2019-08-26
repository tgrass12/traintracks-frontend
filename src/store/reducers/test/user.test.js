import userReducer from '../user';
import {
	SET_USER,
	SET_MEALS
} from '../../actionTypes';

describe('user reducer', () => {
	it('should return initial state', () => {
		expect(userReducer(undefined, {})).toEqual({
			username: 'tyler',
			meals: []
		});
	});

	it('should handle SET_USER', () => {
		expect(
			userReducer({},
			{
				type: SET_USER,
				username: 'alex'
			}
		)).toEqual(
			{
				username: 'alex'
			}
		);
	});

	it('should handle SET_MEALS', () => {
		const meals = ['Breakfast', 'Lunch', 'Dinner'];
		expect(
			userReducer({},
			{
				type: SET_MEALS,
				meals: meals
			}
		)).toEqual(
			{ 
				meals: meals 
			}
		);
	});
});