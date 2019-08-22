import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WorkoutLog from '../WorkoutLog';

describe('<WorkoutLog />', () => {

	it('should render', () => {
		const wrapper = shallow(<WorkoutLog />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});