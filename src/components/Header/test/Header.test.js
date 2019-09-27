/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Header from '../';

jest.mock('../../../Auth/auth0-wrapper', () => ({
	useAuth0: jest.fn()
}));

import { useAuth0 } from '../../../Auth/auth0-wrapper';

describe('<Header/>', () => {
	describe('User not logged in', () => {
		const mockLogin = jest.fn();
		beforeAll(() => {
			useAuth0.mockImplementation(() => ({
				isAuthenticated: false,
				loginWithRedirect: mockLogin
			}));
		});

		it('should render the nav bar with Login/Register links', () => {
			const wrapper = renderer.create(
				<MemoryRouter>
					<Header/>
				</MemoryRouter>
			).toJSON();
			expect(wrapper).toMatchSnapshot();
		});

		it('should navigate to login page on login click', () => {
			const wrapper = mount(
				<MemoryRouter keyLength={0}>
					<Header/>
				</MemoryRouter>
			);

			wrapper.find('button#login').simulate('click');
			expect(mockLogin).toHaveBeenCalled();
		});

		it('should navigate to register on register click', () => {
			const wrapper = mount(
				<MemoryRouter keyLength={0}>
					<Header/>
				</MemoryRouter>
			);
			wrapper.find('#register').simulate('click');
			expect(mockLogin).toHaveBeenCalled();
		});
	});

	describe('User logged in', () => {
		const mockLogout = jest.fn();
		beforeAll(() => {
			useAuth0.mockImplementation(() => ({
				isAuthenticated: true,
				logout: mockLogout
			}));
		});

		it('should render a navigation bar with links for signed in user', () => {
			const wrapper = renderer.create(
				<MemoryRouter>
					<Header/>
				</MemoryRouter>
			).toJSON();
			expect(wrapper).toMatchSnapshot();
		});

		it('should navigate to home page when logo is clicked', () => {
			const wrapper = mount(
				<MemoryRouter initialEntries={['/test']} keyLength={0}>
					<Header/>
				</MemoryRouter>
			);

			wrapper.find('a#app-icon').simulate('click', { button: 0 });
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it('should navigate to the dashboard when Dashboard is clicked', () => {
			const wrapper = mount(
				<MemoryRouter initialEntries={['/test']} keyLength={0}>
					<Header/>
				</MemoryRouter>
			);

			wrapper.find('li a[href="/"]').simulate('click', { button: 0 });
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it('should navigate to the journal when Journal is clicked', () => {
			const wrapper = mount(
				<MemoryRouter keyLength={0}>
					<Header/>
				</MemoryRouter>
			);

			wrapper.find('a[href="/journal"]').simulate('click', { button: 0 });
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it('should navigate to the calendar when Calendar is clicked', () => {
			const wrapper = mount(
				<MemoryRouter keyLength={0}>
					<Header/>
				</MemoryRouter>
			);

			wrapper.find('a[href="/calendar"]').simulate('click', { button: 0 });
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it('should handle logout when logout is clicked', () => {
			const wrapper = mount(
				<MemoryRouter keyLength={0}>
					<Header/>
				</MemoryRouter>
			);

			wrapper.find('#logout').simulate('click');
			expect(mockLogout).toHaveBeenCalled();			
		});
	});
});