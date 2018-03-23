// Frag.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, render, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import OtherComponent from '../components/OtherComponent';

configure({ adapter: new Adapter() });

global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;

test('sanity check', () => {
  expect(true).toBe(true);
});

describe('OtherComponent Component', () => {
  it('renders the OtherComponent component', () => {
    const wrapper = shallow(<OtherComponent title="Cool title" imgSource="./img/cool_pic.png" />);
    console.log('wrapper', wrapper);
    // expect(wrapper.children()).to.have.length(3);
    // expect(wrapper.find({ prop: 'imgSource' })).toBe("./img/cool_pic.png");
    // expect(wrapper.find({ prop: 'title' })).to.have.length(1);
    // console.log('h2: ', wrapper.find('h2'));
    // expect(wrapper.find('h2').text()).toEqual('Cool title');
  });
});

// test('OtherComponent renders correctly', () => {
//   const component = renderer.create(
//     <OtherComponent />
//   );

//   // expect(component.)


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
  
// });