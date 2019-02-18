import React from 'react';
import { shallow } from 'enzyme';
import App from '../index.jsx';

describe('Inital test', () => {
  // it('should render one <Search /> component', () => {
  //   var wrapper = shallow(<App />);
  //   expect(wrapper.find(Search)).to.have.lengthOf(1);
  // });
  test('Should pass a basic test', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveProperty('constructor');
  });
  // test('should render app', () => {
  //   shallow(<App />).contains(<div className="username">Val</div>);
  // });
});
