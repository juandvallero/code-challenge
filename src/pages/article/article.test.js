import React from 'react';
import { shallow } from 'enzyme';
import Article from './article';

describe('Article', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Article match={{ params: { id: '' } }} />);
    expect(wrapper).toMatchSnapshot();
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
