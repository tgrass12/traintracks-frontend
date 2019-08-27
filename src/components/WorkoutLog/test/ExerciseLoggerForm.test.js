import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ExerciseLoggerForm from '../ExerciseLoggerForm';

describe('<ExerciseLoggerForm />', () => {

	it('should render', () => {
		const wrapper = shallow(<ExerciseLoggerForm />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should call logExercise when button is clicked', () => {
		const mockLog = jest.fn();
		const wrapper = shallow(<ExerciseLoggerForm logExercise={mockLog} />);

		wrapper.find('button').simulate('click', { preventDefault: () => {}});
		expect(mockLog).toBeCalled();
	});
});