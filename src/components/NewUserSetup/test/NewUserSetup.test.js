import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewUserSetup from '../';

jest.mock('react-router', () => ({
  useHistory: jest.fn()
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('<NewUserSetup />', () => {

	it('should render', () => {
		const wrapper = mount(<NewUserSetup />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
