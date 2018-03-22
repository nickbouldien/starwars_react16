// Frag.test.js
import React from 'react';
import Frag from '../routes/Frag';
import renderer from 'react-test-renderer';


test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

describe('Frag Component', () => {
  it('renders the Frag component', () => {
    const wrapper = shallow(<Frag />);
    console.log('wrapper');
    // expect(wrapper.children).to.have.length(1);
    // expect(wrapper.);
  });
});

test('Frag renders correctly', () => {
  const component = renderer.create(
    <Frag>
      stuff in the fragment
    </Frag>
  );

  // expect(component.)


  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
});