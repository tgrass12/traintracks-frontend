import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LogNewExercise from '../LogNewExercise';
import Modal from '../../../hocs/Modal';

describe('<LogNewExercise />', () => {

	it('should render', () => {
		const wrapper = shallow(<LogNewExercise />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render passed modal', () => {
		const mockModal = Modal(
			'mockComponent',
			false,
			()=>{}
		);

		const wrapper = shallow(<LogNewExercise
			ExerciseLoggerModal={mockModal}
		/>);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should call displayModal on button click', () => {
		const mockDisplayModal = jest.fn();
		const wrapper = shallow(<LogNewExercise
			displayModal={mockDisplayModal}
		/>);

		wrapper.find('button').simulate('click');
		expect(mockDisplayModal).toHaveBeenCalled();
	});
});