// Frag.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, render, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import setup from './setup';

import OtherComponent from '../components/OtherComponent';

const PROPS = {
  title: "Cool title",
  imgSource: "./img/cool_pic.png" ,
}

test('sanity check', () => {
  expect(true).toBe(true);
});

describe('<OtherComponent /> component', () => {
  it('renders (shallow) the OtherComponent component', () => {
    const wrapper = shallow(<OtherComponent {...PROPS} />);
    // console.log('wrapper', toJson(wrapper.children()));
    expect(wrapper.children().length).toBe(4);
  });
// });

test('OtherComponent matches snapshot', () => {
  const component = mount(<OtherComponent {...PROPS} /> );

  // console.log('h3: ', component.find('h3').text());
  expect(component.find('h3').text()).toBe('Cool title');
  expect(component.find('img').props().src).toEqual('./img/cool_pic.png');

  expect(toJson(component)).toMatchSnapshot();
});

//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // manually trigger the callback
//   // tree.props.onMouseEnter();
//   // // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();

//   // // manually trigger the callback
//   // tree.props.onMouseLeave();
//   // // re-rendering
//   // tree = component.toJSON();
//   // expect(tree).toMatchSnapshot();
  
});