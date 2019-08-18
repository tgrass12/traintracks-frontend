import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Header from '../Header';

it('should render a navigation bar with links', () => {
	const wrapper = shallow(<Header/>);
	expect(wrapper.find('Link').length).toBe(3);
});

it('should navigate to home page when logo is clicked', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/test']}>
			<Header/>
		</MemoryRouter>
	);

	wrapper.find('a#app-icon').simulate('click', { button: 0 });
	expect(wrapper.find('Router')
			.props().history.location.pathname
	).toEqual('/');
});

it('should navigate to the journal when Journal is clicked', () => {
	const wrapper = mount(
		<MemoryRouter>
			<Header/>
		</MemoryRouter>
	);

	wrapper.find('a[href="/journal"]').simulate('click', { button: 0 });
	expect(wrapper.find('Router')
			.props().history.location.pathname
	).toEqual('/journal');
});

it('should navigate to the calendar when Calendar is clicked', () => {
	const wrapper = mount(
		<MemoryRouter>
			<Header/>
		</MemoryRouter>
	);

	wrapper.find('a[href="/calendar"]').simulate('click', { button: 0 });
	expect(wrapper.find('Router')
			.props().history.location.pathname
	).toEqual('/calendar');
});