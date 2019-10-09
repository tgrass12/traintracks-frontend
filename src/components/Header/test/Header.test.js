import React from 'react';
import { useSelector } from 'react-redux';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Header from '../';

jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: jest.fn()
}));

describe('<Header/>', () => {
	describe('User not logged in', () => {
		beforeAll(() => {
			useSelector.mockReturnValue(false);
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

			wrapper.find('a#login').simulate('click', { button: 0 });
			expect(toJson(wrapper)).toMatchSnapshot();
		});

		it('should navigate to register on register click', () => {
			const wrapper = mount(
				<MemoryRouter keyLength={0}>
					<Header/>
				</MemoryRouter>
			);
			wrapper.find('a#register').simulate('click', { button: 0 });
			expect(toJson(wrapper)).toMatchSnapshot();
		});


		it('should not load items if isLoading is true', () => {
			useSelector.mockReturnValueOnce(false)
			.mockReturnValueOnce(true);
			
			const wrapper = mount(
				<MemoryRouter keyLength={0}>
					<Header/>
				</MemoryRouter>
			);
			expect(toJson(wrapper)).toMatchSnapshot();	
		});
	});

	describe('User logged in', () => {
		beforeEach(() => {
			useSelector.mockReturnValueOnce(true)
			.mockReturnValueOnce(false);
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

			jest.spyOn(global, 'fetch');

			wrapper.find('a#logout').simulate('click');
		  	expect(global.fetch).toHaveBeenCalledWith(
		  		'/api/auth/logout', 
		  		{
    				method: 'POST',
  				}
  			);		
		});
	});
});