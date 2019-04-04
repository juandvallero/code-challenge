import React from 'react';
import { shallow } from 'enzyme';
import Footer from './footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
