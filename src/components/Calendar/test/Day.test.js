import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Day from '../Day';

describe('<Day />', function() {
	let testDate = new Date(2019, 7, 4);

	it('should render', () => {
		const wrapper = shallow(<Day day={testDate} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render diet logged dot when diet was logged', () => {
		const wrapper = shallow(<Day day={testDate} dietLogged />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render workout logged dot when workout was logged', () => {
		const wrapper = shallow(<Day day={testDate} workoutLogged />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render appropriate dots when diet and workout are logged', () => {
		const wrapper = shallow(<Day day={testDate} dietLogged workoutLogged />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render active state', () => {
		const wrapper = shallow(<Day day={testDate} active />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render selected state', () => {
		const wrapper = shallow(<Day day={testDate} selected />);
		expect(toJson(wrapper)).toMatchSnapshot();		
	});

	it('should render inactive state', () => {
		const wrapper = shallow(<Day day={testDate} active={false} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render non-selected state', () => {
		const wrapper = shallow(<Day day={testDate} selected={false} />);
		expect(toJson(wrapper)).toMatchSnapshot();		
	});

	it('should handle clicks', function() {
		const onClick = jest.fn();
		const wrapper = shallow(<Day day={testDate} setDate={onClick} />);
		wrapper.find('.day-cell').simulate('click');
	    expect(onClick).toBeCalled();
	});
})