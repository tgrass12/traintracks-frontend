import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NutrientGoals from '../';

describe('<NutrientGoals />', () => {

	it('should render', () => {
		const wrapper = shallow(<NutrientGoals />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should handle field changes', () => {
		const wrapper = shallow(<NutrientGoals />);
		wrapper.find('#nutrition-goals-energy').simulate('change',
			{
				target: {
					name: 'energy',
					value: 3000
				}
			}
		);
		wrapper.find('#nutrition-goals-carbs').simulate('change',
			{
				target: {
					name: 'carbs',
					value: 300
				}
			}
		);
		wrapper.find('#nutrition-goals-protein').simulate('change',
			{
				target: {
					name: 'protein',
					value: 200
				}
			}
		);
		wrapper.find('#nutrition-goals-fats').simulate('change',
			{
				target: {
					name: 'fats',
					value: 100
				}
			}
		);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	test.todo('should handle go back')
	test.todo('should handle skip')
	test.todo('should handle save and continue')
	test.todo('should check fields are valid')
	test.todo('should disable continue if invalid fields')
});
