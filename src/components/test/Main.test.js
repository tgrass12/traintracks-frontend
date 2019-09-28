import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Main from '../Main';
import { useAuth0 } from '../../Auth/auth0-wrapper';

jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: () => ({
		'user': {
			'username': 'test',
			'meals': ['Breakfast', 'Lunch']
		}
	})
}));

jest.mock('../../Auth/auth0-wrapper', () => ({
	useAuth0: jest.fn()
}));


describe('<Main />', () => {
	describe('Authenticated', () => {
		beforeAll(() => {
			useAuth0.mockImplementation(() => ({
				isAuthenticated: true
			}));
		});

		it('should contain the sidebar', () => {
			let wrapper = shallow(<Main/>);
			expect(wrapper.find('Sidebar').exists()).toBeTruthy();
		});

		it('should contain routes for linked components', () => {
			let wrapper = shallow(<Main/>);
			expect(toJson(wrapper)).toMatchSnapshot();
		});
	});

	describe('Not Authenticated', () => {
		beforeAll(() => {
			useAuth0.mockImplementation(() => ({
				isAuthenticated: false
			}));
		});

		it('should not render the sidebar', () => {
			let wrapper = shallow(<Main />);
			expect(wrapper.find('Sidebar').exists()).toBeFalsy();
		});

		it('should render Landing component', () => {
			let wrapper = shallow(<Main />);
			expect(toJson(wrapper)).toMatchSnapshot();
		});
	});

	test.todo('should handle user fetching');
});
