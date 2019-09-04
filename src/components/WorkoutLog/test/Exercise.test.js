import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Exercise from '../Exercise';

describe('<Exercise />', () => {

	it('should render', () => {
		const wrapper = shallow(<Exercise />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render passed props', () => {
		const props = {
			'name': 'Squat',
			'weight': 195,
			'reps': 8,
			'sets': 3
		};

		const wrapper = shallow(<Exercise {...props}/>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});