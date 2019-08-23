import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ComputedNutrients from '../ComputedNutrients';

describe('<ComputedNutrients />', () => {

	it('should render', () => {
		const wrapper = shallow(<ComputedNutrients />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should use contain the passed label', () => {
		const wrapper = shallow(<ComputedNutrients label="testLabel" />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});