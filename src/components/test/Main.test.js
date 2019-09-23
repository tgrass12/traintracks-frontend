import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Main from '../Main';

jest.mock('react-redux', () => ({
	useDispatch: () => {},
	useSelector: () => ({
		'user': {
			'username': 'test',
			'meals': ['Breakfast', 'Lunch']
		}
	})
}));

describe('<Main />', () => {
	it('should contain the sidebar', () => {
		let wrapper = shallow(<Main/>);
		expect(wrapper.find('SideBar').exists).toBeTruthy();
	});

	it('should contain routes for linked components', () => {
		let wrapper = shallow(<Main/>);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	test.todo('should handle user fetching');
});
