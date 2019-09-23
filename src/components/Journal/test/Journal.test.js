import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Journal from '../';

it('should render properly', () => {
	const wrapper = shallow(<Journal/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});