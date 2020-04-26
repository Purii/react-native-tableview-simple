import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface TableViewInterface {
  children?: React.ReactNode;
}

const TableView: React.FC<TableViewInterface> = ({
  children,
}: TableViewInterface) => <View style={styles.tableView}>{children}</View>;

const styles = StyleSheet.create({
  tableView: {
    flexDirection: 'column',
  },
});

export default TableView;
