import React from 'react';
import { useSelector } from 'react-redux';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AuthenticatedRoute from '../AuthenticatedRoute';

jest.mock('react-redux', () => ({
	useSelector: jest.fn(() => false)
}));

const MockComponent = () => (<div>Mock Component</div>);

describe('<AuthenticatedRoute />', () => {
	it('should render Redirect if isAuthenticated is false', () => {
		const wrapper = shallow(
			<AuthenticatedRoute component={MockComponent}/>
		);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render route if isAuthenticated is true', () => {
		useSelector.mockImplementationOnce(() => true)
		.mockImplementationOnce(() => false);
		
		const wrapper = shallow(
			<AuthenticatedRoute component={MockComponent} />
		);

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should render Loading component if isLoading is true', () => {
		useSelector.mockReturnValueOnce(false)
		.mockReturnValueOnce(true);

		const wrapper = shallow(<AuthenticatedRoute />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});