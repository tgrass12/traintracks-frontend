import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoggedExercises from '../LoggedExercises';

describe('<LoggedExercises />', () => {

	it('should render', () => {
		const wrapper = shallow(<LoggedExercises />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render passed exercises', () => {
		const exercises = [
			{ 
				'_id': 1,
				'name': 'Squat',
				'weight': 195,
				'sets': 3,
				'reps': 8
			},
			{
				'_id': 2,
				'name': 'Bench',
				'weight': 195,
				'sets': 3,
				'reps': 8
			}
		];

		const wrapper = shallow(
			<LoggedExercises loggedExercises={exercises} />
		);

		expect(toJson(wrapper)).toMatchSnapshot();
	});
});