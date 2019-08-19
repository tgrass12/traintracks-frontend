import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Meal from '../Meal';

it('should render an empty meal', () => {
	const wrapper = shallow(<Meal/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it('should show the LogFood modal', () => {
	const wrapper = shallow(<Meal />);
	expect(wrapper.find('Modal').props().isOpen).toBe(false);
	wrapper.find('button').simulate('click');
	expect(wrapper.find('Modal').props().isOpen).toBe(true);
});