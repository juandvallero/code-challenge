import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './cardContainer';

describe('CardContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CardContainer />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
