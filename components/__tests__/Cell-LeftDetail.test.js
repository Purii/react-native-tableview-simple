/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Cell from '../Cell';

it('renders with left detail', () => {
  const tree = renderer
    .create(<Cell cellStyle="LeftDetail" title="LeftDetail" detail="Detail" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with accessory', () => {
  const tree = renderer
    .create(
      <Cell
        cellStyle="LeftDetail"
        title="LeftDetail"
        detail="Detail"
        accessory="DisclosureIndicator"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
