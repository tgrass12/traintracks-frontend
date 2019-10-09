import React from 'react';
import { useSelector } from 'react-redux';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Main from '../Main';

jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: jest.fn()
}));

jest.mock('react-router', () => ({
	useHistory: jest.fn(),
	useLocation: jest.fn()
}));

xdescribe('<Main />', () => {
	describe('Authenticated', () => {
		beforeAll(() => {
			useSelector.mockImplementation(() => true);
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
			useSelector.mockImplementation(() => false);
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
