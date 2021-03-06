import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  it('renders button correctly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.exists()).toBeTruthy();
  });
});
