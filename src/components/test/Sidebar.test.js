import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../Sidebar';

it('should render a sidebar', () => { 
	const wrapper = shallow(<Sidebar/>);
	expect(wrapper.find('.sidebar')).toBeTruthy();
});