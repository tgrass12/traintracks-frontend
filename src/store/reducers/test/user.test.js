import userReducer from '../user';
import {
	SET_AUTHENTICATED,
	SET_USER,
	SET_USERNAME,
	SET_MEALS
} from '../../actionTypes';

describe('user reducer', () => {
	it('should return initial state', () => {
		expect(userReducer(undefined, {})).toEqual({
			isAuthenticated: false,
			data: {}
		});
	});

	it('should handle SET_AUTHENTICATED', () => {
		const isAuthenticated = true;
		expect(
			userReducer({},
			{
				type: SET_AUTHENTICATED,
				isAuthenticated
			}
		)).toEqual({ isAuthenticated: true });
	});

	it('should handle SET_USER', () => {
		const user = {
			username: 'alex',
			meals: ['Breakfast', 'Lunch']
		};

		expect(
			userReducer({},
			{
				type: SET_USER,
				data: user 
			}
		)).toEqual({
			data: user
		});
	});

	it('should handle SET_USERNAME', () => {
		expect(
			userReducer({},
			{
				type: SET_USERNAME,
				username: 'alex'
			})
		).toEqual(
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