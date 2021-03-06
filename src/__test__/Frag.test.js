// Frag.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, render, shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import setup from './setup';

test('sanity check', () => {
  expect(2 + 2).toBe(4);
});

// describe('Frag Component', () => {
//   it('renders the Frag component', () => {
//     const wrapper = shallow(<Frag />);
//     console.log('wrapper', wrapper);
//     // expect(wrapper.children).to.have.length(1);
//     expect(wrapper.children().text()).to.equal('Best Star Wars movie??');
//   });
// });

test('Frag renders correctly', () => {
  const component = renderer.create(
    <div>
      hola, nick
    </div>
    // <Frag>
    //   stuff in the fragment
    // </Frag>
  );

  // expect(component.)


  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
  
});