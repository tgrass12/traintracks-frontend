import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Dashboard from '../';

const mockJournal = {
	nutrition: {
		targets: {
			cals: 2000,
			macros: {
				carbs: {
					total: 200
				},
				protein: 160,
				fats: {
					total: 80
				}
			}
		},
		logged: {
			cals: 0,
			macros: {
				carbs: {
					total: 0
				},
				protein: 0,
				fats: {
					total: 0
				}
			}			
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
