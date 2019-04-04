import React from 'react';
import { shallow } from 'enzyme';
import Card from './card';

describe('Card', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Card article={ARTICLE} />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Card Content', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Card article={ARTICLE} />);
    expect(
      wrapper.containsMatchingElement(<h1>Direct Mobility Director</h1>)
    ).toBeTruthy();
  });
});

const ARTICLE = {
  author: 'Flavio Brekke',
  excerpt:
    '\nAssumenda dolores facere explicabo eius inventore. Aut accusantium esse itaque. Quaerat suscipit repellat voluptatem aut nobis.\n \rSoluta voluptas dignissimos commodi maiores sequi et. Adipisci accusamus ullam consequuntur omnis ea enim possimus aut aut. Sequi nostrum rerum voluptatem ea a. Aliquid dolores ratione consequuntur saepe enim.\n \rUt quis',
  title: 'Direct Mobility Director'
};
