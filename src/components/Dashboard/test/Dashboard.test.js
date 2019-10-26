import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from '../';

const mockJournal = {
	nutrition: {
		targets: {
			energy: 2000,
			totalCarbs: 200,
			protein: 160,
			totalFats: 80,
		},
		logged: {
			energy: 0,
			totalCarbs: 0,
			protein: 0,
			totalFats: 0,
		},
		meals: [],
		water: 0,
	},
	workouts: []
};

jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: () => mockJournal
}));

jest.mock('react-router', () => ({
	useHistory: () => {}
}));

describe('<Dashboard />', () => {
	it('should render', () => {
		const wrapper = shallow(<Dashboard />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
