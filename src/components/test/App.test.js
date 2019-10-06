import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Cookies from 'universal-cookie';
import App from '../App';

jest.mock('react-redux', () => ({
	useDispatch: () => {}
}));

describe('<App />', () => {
	it('should render', () => {
		const wrapper = shallow(<App />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	test.todo('should load session if session cookie exists');
});
