/* eslint-disable import/no-unresolved */
import React, {
  PropTypes,
} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
/* eslint-enable import/no-unresolved */

const TableView = props => (
  <View style={styles.tableView}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  tableView: {
    flexDirection: 'column',
  },
});

TableView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default TableView;
