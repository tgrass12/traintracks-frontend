import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Day from './Day';

describe('<Day />', function() {
	it('should handle clicks', function() {
		const onClick = sinon.spy();
		const wrapper = shallow(<Day setDate={onClick} />);
		wrapper.simulate('click');
	    expect(onClick).to.have.property('callCount', 1);
	});
})