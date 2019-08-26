import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LogFoodForm from '../LogFoodForm';

describe('<LogFoodForm />', () => {

	it('should render', () => {
		const wrapper = shallow(<LogFoodForm />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render passed meal options', () => {
		const meals = ['Breakfast', 'Lunch', 'Dinner']
		const wrapper = shallow(<LogFoodForm meals={meals} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should call logFood when button is clicked', () => {
		const mockLogFood = jest.fn();
		const wrapper = shallow(<LogFoodForm logFood={mockLogFood} />);
		wrapper.find('#log-food-btn').simulate('click', {
			preventDefault: () => {}
		});

		expect(mockLogFood).toBeCalled();
	});

	test.todo('should handle servings changes');
	test.todo('should handle meal change selection');
});