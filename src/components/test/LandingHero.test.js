import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingHero from '../LandingHero';

describe('<LandingHero />', () => {

	it('should render', () => {
		const wrapper = shallow(<LandingHero />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});