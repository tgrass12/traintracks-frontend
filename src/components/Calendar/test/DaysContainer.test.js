import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DaysContainer from '../DaysContainer';

describe('<DaysContainer />', () => {
	const mockDate = new Date(2019, 7, 4);

	it('should render', () => {
		const wrapper = shallow(<DaysContainer date={mockDate} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});