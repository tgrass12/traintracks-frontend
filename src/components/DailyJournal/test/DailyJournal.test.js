import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DailyJournal from '../DailyJournal';

it('should render properly', () => {
	const wrapper = shallow(<DailyJournal/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});