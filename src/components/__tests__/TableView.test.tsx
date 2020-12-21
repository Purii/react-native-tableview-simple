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

it('renders with appearance auto', () => {
  const tree = renderer
    .create(
      <TableView appearance="auto">
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

it('renders with appearance light', () => {
  const tree = renderer
    .create(
      <TableView appearance="light">
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

it('renders with appearance dark', () => {
  const tree = renderer
    .create(
      <TableView appearance="dark">
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
