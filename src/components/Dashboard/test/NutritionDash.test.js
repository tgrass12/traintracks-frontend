import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NutritionDash from '../NutritionDash';

const mockItems = [
	{
		'label': 'cals',
		'target': 2000,
		'logged': 0
	},
	{
		'label': 'carbs',
		'target': 240,
		'logged': 0
	},
	{
		'label': 'fats',
		'target': 90,
		'logged': 0
	},
	{
		'label': 'protein',
		'target': 165,
		'logged': 0			
	}

]

describe('<NutritionDash />', () => {

	it('should render', () => {
		const wrapper = shallow(<NutritionDash />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render a <ProgressTracker /> for each item passed', () => {
		const wrapper = shallow(<NutritionDash items={mockItems} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should call handleNav on button click', () => {
		let mockNav = jest.fn();
		const wrapper = shallow(<NutritionDash handleNav={mockNav} />);
		wrapper.find('#dashboard-nutrition-journal-btn').simulate('click');
		expect(mockNav).toBeCalled();
	});
});