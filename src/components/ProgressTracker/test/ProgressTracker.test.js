import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProgressTracker from '../';

describe('<ProgressTracker />', () => {

	it('should render', () => {
		const wrapper = shallow(<ProgressTracker />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should display the item name', () => {
		const wrapper = shallow(<ProgressTracker itemName='Vanilla Shake'/>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should display progress numbers in percentage and actual values', () => {
		const wrapper = shallow(
			<ProgressTracker current={1000} target={2000} />
		);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});