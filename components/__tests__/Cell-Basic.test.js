/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Cell from '../Cell';

it('renders basic', () => {
  const tree = renderer
    .create(<Cell cellStyle="Basic" title="Basic" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with accessory', () => {
  const tree = renderer
    .create(
      <Cell cellStyle="Basic" title="Basic" accessory="DisclosureIndicator" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
