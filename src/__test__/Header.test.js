// Frag.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, render, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../components/Header';

configure({ adapter: new Adapter() });

global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;

test('sanity check', () => {
  expect(2 + 1).toBe(3);
});

// describe('Frag Component', () => {
//   it('renders the Frag component', () => {
//     const wrapper = shallow(<Header />);
//     console.log('wrapper', wrapper);
//     // expect(wrapper.children).to.have.length(1);
//     expect(wrapper.children().text()).to.equal('Best Star Wars movie??');
//   });
// });

// test('Frag renders correctly', () => {
//   const component = renderer.create(
//     <Header />
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