import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Auth from '../';

describe('<Auth />', () => {

	it('should render Login if isRegister is false', () => {
		const wrapper = shallow(<Auth />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render Register if isRegister is true', () => {
		const wrapper = shallow(<Auth isRegister/>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	test.todo('should call onAuth when form submitted');
	test.todo('should verify password requirements on registration');
});