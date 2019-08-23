import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LogNewExercise from '../LogNewExercise';

describe('<LogNewExercise />', () => {

	it('should render', () => {
		const wrapper = shallow(<LogNewExercise />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});