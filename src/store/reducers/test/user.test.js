import userReducer from '../user';
import {
	SET_USER
} from '../../actionTypes';

describe('user reducer', () => {
	it('should return initial state', () => {
		expect(userReducer(undefined, {})).toEqual({
			username: 'tyler'
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
});