import * as actions from '../user';
import {
	SET_USER_LOADING,
	SET_AUTHENTICATED,
	SET_USER,
	SET_MEALS,
	SET_USERNAME
} from '../../actionTypes';

describe('user actions creators', () => {

	it('should create an action to set user loading state', () => {
		const expectedAction = {
			type: SET_USER_LOADING,
			isLoading: true
		};

		expect(actions.setUserLoading(true)).toEqual(expectedAction);
	});

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

describe('user actions w/ dispatch', () => {

	beforeAll(() => {
		jest.spyOn(global, 'fetch');
	});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should dispatch an action to init a new user', () => {
		const username = 'test';
		const userData = {
			'sex': 'Male',
			'energy': 2000,
			'carbs': 200,
			'protein': 160,
			'fats': 90
		}

		actions.initNewUser(username, userData)();
	  	expect(global.fetch).toHaveBeenCalledWith(
	  		'/api/users/test/init',
	  		{
  				'method': 'PATCH',
  				'headers': {
  					'Content-Type': 'application/json'
  				},
					'body': JSON.stringify({
						'sex': userData.sex,
						'nutrients': {
							'energy': userData.energy,
							'totalCarbs': userData.carbs,
							'protein': userData.protein,
							'totalFats': userData.fats
						}
					})
				},
			);
	});
});
