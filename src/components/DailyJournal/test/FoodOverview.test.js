import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FoodOverview from '../FoodOverview';

const food = {
	'id': 20,
	'name': 'Cheeseburger',
	'cals': 500
}

it('should render properly', () => {
	const wrapper = shallow(<FoodOverview/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render the name and calories of the food provided.', () => {
	const wrapper = shallow(<FoodOverview food={food}/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it('should invoke selected food change on click', () => {
	let mockSetFood = jest.fn(x => x.id);

	const wrapper = shallow(
		<FoodOverview food={food} setFoodToLog={mockSetFood} />
	);
	wrapper.find('div').simulate('click', { button: 0 });
	expect(mockSetFood.mock.calls[0][0]).toBe(20);
});