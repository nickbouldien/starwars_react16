// Frag.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Link, MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';
import setup from './setup';


describe('<Header /> component', () => {
  it('renders (shallow) the Header component', () => {
    const wrapper = shallow(<Header />);
    // console.log('wrapper', toJson(wrapper.children()));
    expect(wrapper.children().length).toBe(2);
    // expect(wrapper.find('a').length).toBe(3);
  });

  test('Header matches snapshot', () => {
    const component = mount(<MemoryRouter><Header /></MemoryRouter> );
    console.log('link: ', toJson(component.find('a')));
    expect(component.find('a').first().text()).toBe('React 16 SW');

    // can't do the snapshot since they contain keys which change each time
    // expect(toJson(component)).toMatchSnapshot();
  });
});