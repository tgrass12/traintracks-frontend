import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AuthenticatedRoute from '../AuthenticatedRoute';
import { useAuth0 } from '../../Auth/auth0-wrapper';

jest.mock('../../Auth/auth0-wrapper', () => ({
	useAuth0: jest.fn(() => ({
		loading: false,
		loginWithRedirect: jest.fn(),
		isAuthenticated: false
	}))
}));

const MockComponent = () => (<div>Mock Component</div>);

describe('<AuthenticatedRoute />', () => {
	it('should not render route if isAuthenticated is false', () => {
		const wrapper = shallow(
			<AuthenticatedRoute component={MockComponent}/>
		);

		expect(wrapper.props().render()).toBeFalsy();
	});

	it('should render route if isAuthenticated is true', () => {
		useAuth0.mockImplementation(() => ({
			isAuthenticated: true
		}));
		
		const wrapper = shallow(
			<AuthenticatedRoute component={MockComponent} />
		);

		expect(wrapper.props().render()).toBeTruthy();
	})
});