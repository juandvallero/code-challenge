import React from 'react';
import { shallow } from 'enzyme';
import Welcome from './welcome';

describe('Welcome', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
