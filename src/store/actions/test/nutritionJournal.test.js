import * as actions from '../nutritionJournal';
import {
	SET_WATER_INTAKE,
	UPDATE_WATER_INTAKE,
} from '../../actionTypes';

describe('nutritionJournal actions', () => {
	const date = '2019-07-04';
	
	it('should create an action to set water intake', () => {
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
		const waterIntake = 24;
		const expectedAction = {
			type: UPDATE_WATER_INTAKE,
			date,
			waterIntake
		}
		expect(actions.updateWaterIntake(date, waterIntake))
			.toEqual(expectedAction);
	});	
});