import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Journal from '../';

jest.mock('react-router', () => ({
	useLocation: jest.fn(() => ({
		search: ''
	}))
}));

jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: jest.fn((state) => ({
		date: '2019-07-04',
		journal: {
			nutrition: {}
		}
	}))
}));

describe('<Journal />', () => {
	it('should render properly', () => {
		const wrapper = shallow(<Journal/>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
