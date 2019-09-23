import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../Header';
import dateFns from 'date-fns';

describe('<Header />', function() {
	let testDate = new Date(2019, 7, 4);

	it('should render', () => {
		const wrapper = shallow(<Header/>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render passed date', () => {
		const wrapper = shallow(<Header date={testDate} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should handle nextMonth', () => {
		const mockSetDate = jest.fn();
		const wrapper = shallow(
			<Header setDate={mockSetDate} date={testDate} />
		);
		wrapper.find('#next-month-icon').simulate('click');

		let nextMonth = dateFns.addMonths(testDate, 1);
		let mockedDate = mockSetDate.mock.calls[0][0];
		expect(mockedDate).toEqual(nextMonth);
	});


	it('should handle prevMonth', () => {
		const mockSetDate = jest.fn();
		const wrapper = shallow(
			<Header setDate={mockSetDate} date={testDate} />
		);
		wrapper.find('#prev-month-icon').simulate('click');

		let prevMonth = dateFns.subMonths(testDate, 1);
		let mockedDate = mockSetDate.mock.calls[0][0];
		expect(mockedDate).toEqual(prevMonth);
	});
});