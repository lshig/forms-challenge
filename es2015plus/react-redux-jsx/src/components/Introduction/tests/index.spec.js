import React from 'react'
import {shallow} from 'enzyme'
import Introduction from '../index'
describe('<Introduction />', () => {
  it('has a <section> wrapper', () => {
    const wrapper = shallow(<Introduction />)
    expect(wrapper.type()).toBe('section')
  })
  it('has a heading that contains text', () => {
    const wrapper = shallow(<Introduction />).find('h1')
    expect(wrapper.text()).toBe('JavaScript ES2015+ Forms: React, Redux, & JSX')
  })
  it('has a link that contains text', () => {
    const wrapper = shallow(<Introduction />).find('a')
    expect(wrapper.text()).toBe('Liz Shigetoshi')
  })
})
