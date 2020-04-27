import React from 'react';
import { shallow } from 'enzyme';
import App from '../index';

describe('<App />', () => {
  it('has a <div> wrapper', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.type()).toBe('div');
  });
  it('has a wrapper contains 1 child', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').children().length).toBe(2);
  });
});
