import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import MultistepForm, { FormConfirmation } from '../';

//TODO: Hooks not working?
xdescribe('<MultistepForm />', () => {
	it('should render', () => {
		const EmptyForm = MultistepForm();
		const wrapper = mount(<EmptyForm />);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should contain passed components', () => {
		const mockHello = (<div>Hello</div>);
		const mockWorld = (<div>World</div>);
		const mockComponents = [mockHello, mockWorld];
		const wrapper = MultistepForm(mockComponents);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

describe('<FormConfirmation />', () => {
	it('should render', () => {
		const wrapper = shallow(<FormConfirmation />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should list passed fields', () => {
		const mockFields = {
			'name': 'Tester',
			'age': '24',
			'weight': 165
		};

		const wrapper = shallow(<FormConfirmation fields={mockFields} />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should call prev on click', () => {
		const mockPrev = jest.fn();
		const wrapper = shallow(<FormConfirmation prev={mockPrev} />);
		wrapper.find('#prev').simulate('click');
		expect(mockPrev).toBeCalled();
	});

	it('should call submit on click', () => {
		const mockSubmit = jest.fn();
		const wrapper = shallow(<FormConfirmation submit={mockSubmit} />);
		wrapper.find('#submit').simulate('click');
		expect(mockSubmit).toBeCalled();
	});
});