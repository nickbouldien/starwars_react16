import { mount, render, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.expect = expect;

global.mount = mount;
global.render = render;
global.shallow = shallow;



// links:

// guide
// https://www.robinwieruch.de/react-testing-tutorial/#react-enzyme-test-setup

// enzyme
// http://airbnb.io/enzyme/docs/api/shallow.html

