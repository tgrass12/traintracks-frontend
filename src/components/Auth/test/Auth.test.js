import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Auth from '../';

//TODO: Figure out how to mock useState
describe('<Auth />', () => {
	describe('Log in', () => {
		it('should render Login form', () => {
			const wrapper = shallow(<Auth />);
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		test.todo('should call onAuth with username, password with valid form');
	});

	describe('Register', () => {
		it('should render Register form', () => {
			const wrapper = shallow(<Auth isRegister/>);
			expect(toJson(wrapper)).toMatchSnapshot();
		});
		test.todo('should validate username');
		test.todo('should validate password');
		test.todo('should call onAuth with username, email, password');
	});

	test.todo('should display a spinner when making an auth request');
});