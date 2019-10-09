import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WorkoutLog from '../index';

describe('<WorkoutLog />', () => {

	const exercises = [
		{
			'exerciseName': 'Squat',
			'weight': 135,
			'reps': 8,
			'sets': 3
		}
	];

	it('should render LogNewExercise when there are no exercises', () => {
		const wrapper = shallow(<WorkoutLog />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render an exercise table when exercises exist', () => {
		const wrapper = shallow(<WorkoutLog workouts={exercises} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
	
	it('should display a modal on "Add Exercise" click', () => {
		const wrapper = shallow(<WorkoutLog workouts={exercises} />);
		wrapper.find('button').simulate('click');
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});