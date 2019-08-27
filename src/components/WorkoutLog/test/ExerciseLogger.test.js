import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ExerciseLogger from '../ExerciseLogger';

describe('<ExerciseLogger />', () => {

	it('should render', () => {
		const wrapper = shallow(<ExerciseLogger />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});