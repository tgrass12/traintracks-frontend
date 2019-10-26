import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MealItem from '../MealItem';

const food = {
	_id: 12345,
	name: 'Cheesecake',
	'nutrients': {
		'energy': 100,
		"totalCarbs": 15,
		"protein": 20,
		"totalFats": 9
	}
}

it('should render an empty entry properly', () => {
	const wrapper = shallow(<MealItem/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render the given food name', () => {
	const wrapper = shallow(<MealItem food={food}/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it('should call click handler when clicked', () => {
	const mockHandler = jest.fn(f => f._id);
	const wrapper = shallow(<MealItem food={food} handleClick={mockHandler}/>);
	wrapper.find('.meal-item').simulate('click', { button: 0 });

	expect(mockHandler.mock.calls[0][0]).toBe(12345);
});
