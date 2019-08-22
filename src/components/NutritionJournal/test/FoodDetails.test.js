import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FoodDetails from '../FoodDetails';

it('should render properly', () => {
	const wrapper = shallow(<FoodDetails/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render the name of the food provided.', () => {
	const food = {
		'name': 'Cheeseburger'
	};
	const wrapper = shallow(<FoodDetails food={food}/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});