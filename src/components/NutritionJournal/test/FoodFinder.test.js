import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FoodFinder from '../FoodFinder';

describe('<FoodFinder />', () => {
	const setState = jest.fn();
	const useStateSpy = jest.spyOn(React, 'useState')
	useStateSpy.mockImplementation((init) => [init, setState]);

	it('should render', () => {
		const wrapper = shallow(<FoodFinder />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	test.todo('should call findFoods when button is clicked');
	test.todo('should handle setFoodToFind on input change');
	test.todo('should render found foods');
});