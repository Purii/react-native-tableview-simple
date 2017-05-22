/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Cell from '../Cell';

it('renders with subtitle', () => {
  const tree = renderer
    .create(
      <Cell
        cellStyle="Subtitle"
        title="Subtitle"
        detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders with accessory', () => {
  const tree = renderer
    .create(
      <Cell
        cellStyle="Subtitle"
        title="Subtitle"
        detail="No linebreakkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
        accessory="DisclosureIndicator"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
