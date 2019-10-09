import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Loading from '../Loading';

describe('<Loading />', () => {

	it('should render', () => {
		const wrapper = shallow(<Loading />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});