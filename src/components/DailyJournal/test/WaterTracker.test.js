import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WaterTracker from '../WaterTracker';

const mockAddWater = jest.fn(e => Number(e));

it('should render properly', () => {
	const wrapper = shallow(<WaterTracker/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render with the provided water amount', () => {
	const wrapper = shallow(<WaterTracker amount={10}/>);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it('should properly add 4oz to intake', () => {
	const wrapper = shallow(<WaterTracker addWaterIntake={mockAddWater} />);

	let btn = wrapper.find('div.intake-buttons-container').childAt(0);
	btn.simulate('click', btn.props().value);
	expect(mockAddWater.mock.results[0].value).toBe(4);
});

it('should properly add 8oz to intake', () => {
	const wrapper = shallow(<WaterTracker addWaterIntake={mockAddWater} />);

	let btn = wrapper.find('div.intake-buttons-container').childAt(1);
	btn.simulate('click', btn.props().value);
	expect(mockAddWater.mock.results[1].value).toBe(8);
});

it('should properly add 16oz to intake', () => {
	const wrapper = shallow(<WaterTracker addWaterIntake={mockAddWater} />);

	let btn = wrapper.find('div.intake-buttons-container').childAt(2);
	btn.simulate('click', btn.props().value);
	expect(mockAddWater.mock.results[2].value).toBe(16);
});

it('should properly add 32oz to intake', () => {
	const wrapper = shallow(<WaterTracker addWaterIntake={mockAddWater} />);

	let btn = wrapper.find('div.intake-buttons-container').childAt(3);
	btn.simulate('click', btn.props().value);
	expect(mockAddWater.mock.results[3].value).toBe(32);
});
