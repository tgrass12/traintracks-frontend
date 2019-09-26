import React from 'react';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import Header from '../';

it('should render a navigation bar with links', () => {
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