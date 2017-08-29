import React from 'react';
import { FlatList } from 'react-native';

import { Cell, Separator, TableView } from 'react-native-tableview-simple';

const data = [
  { id: 1, title: '1' },
  { id: 2, title: '2' },
  { id: 3, title: '3' },
  { id: 4, title: '4' },
];

export default (ExampleWithFlatList = () =>
  <FlatList
    data={data}
    keyExtractor={(item, index) => item.id}
    renderItem={({ item, separators }) =>
      <Cell
        title={item.title}
        onPress={console.log}
        onHighlightRow={separators.highlight}
        onUnHighlightRow={separators.unhighlight}
      />}
    ItemSeparatorComponent={({ highlighted }) =>
      <Separator isHidden={highlighted} />}
  />);
