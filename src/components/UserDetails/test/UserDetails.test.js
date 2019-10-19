import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UserDetails from '../';

describe('<UserDetails />', () => {

	it('should render', () => {
		const wrapper = shallow(<UserDetails />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('should call handleUpdate with empty fields if skipped', () => {
		const mockUpdate = jest.fn();
		const mockNext = jest.fn();
		const wrapper = shallow(
			<UserDetails 
				handleUpdate={mockUpdate}
				next={mockNext} 
			/>
		);
		wrapper.find('button[name="skip"]').simulate('click', 
			{ 
				preventDefault: ()=>{},
				target: {
					name: 'skip'
				}
			}
		);

		expect(mockUpdate).toBeCalledWith({
			name: undefined,
			age: undefined,
			sex: undefined
		});

		expect(mockNext).toBeCalled();
	});

	it('should call handleUpdate with last fields if skipped and changes made', () => {
		const mockUpdate = jest.fn();
		const mockNext = jest.fn();
		const mockFields = {
			name: 'Tester Man',
			age: 24,
			sex: 'Male'
		}
		const wrapper = shallow(
			<UserDetails 
				handleUpdate={mockUpdate}
				next={mockNext}
				fields={mockFields}
			/>
		);

		wrapper.find('#user-info-name').simulate('change',
			{
				target: {
					name: 'name',
					value: 'New Name'
				}
			}
		);

		wrapper.find('button[name="skip"]').simulate('click', 
			{ 
				preventDefault: ()=>{},
				target: {
					name: 'skip'
				}
			}
		);

		expect(mockUpdate).toBeCalledWith(mockFields);
		expect(mockNext).toBeCalled();
	});

	it('should call handleupdate with given fields if save & continue', () => {
		const mockUpdate = jest.fn();
		const mockNext = jest.fn();
		const mockFields = {
			name: 'Tester Man',
			age: 24,
			sex: 'Male'
		}
		const wrapper = shallow(
			<UserDetails 
				handleUpdate={mockUpdate}
				next={mockNext}
				fields={mockFields}
			/>
		);

		wrapper.find('#user-info-name').simulate('change',
			{
				target: {
					name: 'name',
					value: 'New Name'
				}
			}
		);
		
		wrapper.find('button[name="skip"]').simulate('click', 
			{ 
				preventDefault: ()=>{},
				target: {}
			}
		);

		expect(mockUpdate).toBeCalledWith({
			...mockFields,
			name: 'New Name'
		});
		expect(mockNext).toBeCalled();
	});

	it('should not allow continue if age < 1', () => {
		const wrapper = shallow(<UserDetails />);
		wrapper.find('#user-info-age').simulate('change',
			{
				target: {
					name: 'age',
					value: -2
				}
			}
		);

		expect(toJson(wrapper)).toMatchSnapshot();
	});
});