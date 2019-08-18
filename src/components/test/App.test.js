import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

it('should render the header', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find('Header').exists()).toBeTruthy();
});

it('should render the main content wrapper', () => {
	const wrapper = shallow(<App />);
	expect(wrapper.find('Main').exists()).toBeTruthy();
});