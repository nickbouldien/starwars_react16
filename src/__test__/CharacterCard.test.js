// Frag.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Link, MemoryRouter } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import setup from './setup';

const PROPS = {
  character: {
    name: 'anakin',
    height: '17',
    birth_year: '1980'
  }
}

describe('<CharacterCard /> component', () => {
  it('renders (shallow) the CharacterCard component', () => {
    const wrapper = shallow(<CharacterCard {...PROPS} />);
    console.log('wrapper', toJson(wrapper.children()));
    expect(wrapper.children().length).toBe(2);
  });

  // test('CharacterCard matches snapshot', () => {
  //   const component = mount(<MemoryRouter><CharacterCard {...PROPS} /></MemoryRouter> );
  //   console.log('link: ', toJson(component.find('a')));
  //   expect(component.find('a').first().text()).toBe('React 16 SW');

  //   // can't do the snapshot since they contain keys which change each time
  //   // expect(toJson(component)).toMatchSnapshot();
  // });
});