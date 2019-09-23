import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Modal from './';

it('should render an empty modal', () => {
	const EmptyModal = Modal();
	const wrapper = shallow(EmptyModal);
	expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render a passed component', () => {
	const MockComponent = () => (
		<div> Hello World! </div>
	);

	const MockModal = Modal(MockComponent, true);
	const wrapper = mount(MockModal);

	expect(toJson(wrapper)).toMatchSnapshot();
});

it('should hide modal when hideFn called', () => {
	let hideFn = jest.fn();
	const MockComponent = () => (
		<div> Hello World! </div>
	);

	const MockModal = Modal(MockComponent, false, hideFn);
	const wrapper = shallow(MockModal);
	wrapper.find('ModalPortal').props().onRequestClose();
	expect(hideFn.mock.calls.length).toBe(1);
});