import React from 'react';
import Card from '../Card';
import renderer from 'react-test-renderer';

const profileDefault = {
  nome: 'faelribeiro22',
  avatar: 'https://avatars1.githubusercontent.com/u/10289821?v=4',
}

it('Test card component renderer', () => {
  const component = renderer.create(
    <Card profile={profileDefault} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

