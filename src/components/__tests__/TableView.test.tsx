/* eslint-env node, jest */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Cell, Section, TableView } from '../../index';

it('renders basic', () => {
  const tree = renderer
    .create(
      <TableView>
        <Section footer="All rights reserved.">
          <Cell
            title="Help / FAQ"
            titleTextColor="#007AFF"
            onPress={(): void => console.log('open Help/FAQ')}
          />
          <Cell
            title="Contact Us"
            titleTextColor="#007AFF"
            onPress={(): void => console.log('open Contact Us')}
          />
          {null}
        </Section>
      </TableView>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
