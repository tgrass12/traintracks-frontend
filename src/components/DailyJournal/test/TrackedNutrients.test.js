import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TrackedNutrients from '../TrackedNutrients';

const props = 	{
	'nutrients': {
		"cals": 200,
		"macros": {
			"carbs": {
				"total": 15
			},
			"protein": 20,
			"fats": {
				"total": 9
			}
		}
	},
	'servings': 2
}

it('should render an empty entry properly', () => {
	const wrapper = shallow(<TrackedNutrients/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render the passed nutrients and servings.', () => {
	const wrapper = shallow(
		<TrackedNutrients 
			servings={props.servings} 
			nutrients={props.nutrients}
		/>
	);
	expect(toJson(wrapper)).toMatchSnapshot();
});