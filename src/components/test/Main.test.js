import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';

it('should contain the sidebar', () => {
	let wrapper = shallow(<Main/>);
	expect(wrapper.find('SideBar').exists).toBeTruthy();
});

it('should contain routes for linked components', () => {
	let wrapper = shallow(<Main/>);
	expect(wrapper.find('Route').length).toBe(2);
});