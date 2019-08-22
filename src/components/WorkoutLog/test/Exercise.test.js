import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Exercise from '../Exercise';

describe('<Exercise />', () => {

	it('should render', () => {
		const wrapper = shallow(<Exercise />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});