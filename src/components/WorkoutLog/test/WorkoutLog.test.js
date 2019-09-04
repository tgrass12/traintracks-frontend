import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WorkoutLog from '../index';

jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: () => ({
		'journal': {
			'selectedDate': '2019-01-01',
			'2019-01-01': {
				'workouts': []
			},
			'2019-01-02': {
				'workouts': [
					{ 'name': 'mockExercise' }
				]
			}
		}
	})
}));

describe('<WorkoutLog />', () => {

	it('should render LogNewExercise when there are no exercises', () => {
		const wrapper = shallow(<WorkoutLog />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	//How can i change the selected redux state above?
	//Should i elevate the redux store to the Journal level?
	test.todo('should render an exercise table when exercises exist');
	test.todo('should display a modal on "Add Exercise" click');
});