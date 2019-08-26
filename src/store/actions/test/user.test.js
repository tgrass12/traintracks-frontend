import * as actions from '../user';
import {
	SET_USER
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

});