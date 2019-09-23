import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from '../';

it('should render', () => {
	const wrapper = shallow(<Dashboard />);
	expect(toJson(wrapper)).toMatchSnapshot();
});